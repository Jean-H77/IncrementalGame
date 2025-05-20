import React from 'react';
import {Typography} from "@mui/material";
import {useCurrencyStore} from "@/game/GameStore";

const CurrencyInformation = () => {

    const currency = useCurrencyStore(state => state.coins);

    return (
        <Typography variant="body2"  align="center" sx={{ letterSpacing: 0.5 }}>
            Coins
            <br/>
            {currency} 🪙
        </Typography>
    );
};

export default CurrencyInformation;