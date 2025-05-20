import {Box, Button, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {useState} from "react";
import * as React from "react";
import {ResourceType, useCurrencyStore, useResourceStore} from "@/game/GameStore";
import {
    AwesomeButton,
    AwesomeButtonProgress
} from 'react-awesome-button';

import 'react-awesome-button/dist/styles.css';

interface ResourceComponentProps {
    increaseResourceBtnName: string
    increaseWorkerBtnName: string
    resource: ResourceType;
}

const PURCHASE_WORKER_PRICE = 10;

function ResourceComponent({ increaseResourceBtnName, increaseWorkerBtnName, resource }: ResourceComponentProps) {
    const [workerPurchaseAmount, setWorkerPurchaseAmount] = useState(1);

    const qty = useResourceStore(state => state.resources[resource]);
    const increaseWorkerBtn = useResourceStore(state => state.increaseWorker);
    const increaseResourceBtn = useResourceStore(state => state.increaseResource);

    const coins = useCurrencyStore(state => state.coins);
    const decrementCoins = useCurrencyStore(state => state.decreaseCoins);

    const onBuyWorkerBtnClick = () => {
        if(!canPurchaseWorker()) {
            return;
        }

        decrementCoins(getCoinAmountRequiredForWorkerPurchase());
        increaseWorkerBtn(resource, workerPurchaseAmount);
    }

    const onIncreaseResourceBtnClick = (release: any) => {
        increaseResourceBtn(resource, 1);
        release();
    };

    const handleChange = (
        _event: React.MouseEvent<HTMLElement>,
        purchaseAmount: number,
    ) => {
        if(purchaseAmount !== null) {
            setWorkerPurchaseAmount(purchaseAmount);
        }
    };

    const getCoinAmountRequiredForWorkerPurchase = (): number => {
        return workerPurchaseAmount * PURCHASE_WORKER_PRICE;
    }

    const canPurchaseWorker = (): boolean => {
        return getCoinAmountRequiredForWorkerPurchase() <= coins;
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AwesomeButtonProgress
                releaseDelay={1000}
                type="link"
                size="small"
                resultLabel="+1"
                onPress={(_event, release) => onIncreaseResourceBtnClick(release)}
            >
                {increaseResourceBtnName}
            </AwesomeButtonProgress>

            <progress
                value={qty % 1}
                max={1}
                aria-label="Resource Progress"
                style={{ height: '2rem', width: '10rem', maxWidth: '10rem', minWidth: '10rem' }}
            />

            <AwesomeButton
                type="primary"
                size="large"
                disabled={!canPurchaseWorker()}
                onMouseUp={onBuyWorkerBtnClick}
                className="buy-worker-btn"
            >
                {increaseWorkerBtnName} ({getCoinAmountRequiredForWorkerPurchase()}🪙)
            </AwesomeButton>

            <ToggleButtonGroup
                color="primary"
                value={workerPurchaseAmount}
                exclusive
                onChange={handleChange}
                aria-label="Worker Purchase Amount"
                size="small"
            >
                <ToggleButton value={1}>1x</ToggleButton>
                <ToggleButton value={5}>5x</ToggleButton>
                <ToggleButton value={10}>10x</ToggleButton>
            </ToggleButtonGroup>
        </Box>

    );
}

export default ResourceComponent;