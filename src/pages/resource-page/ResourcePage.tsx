import {Stack} from "@mui/material";
import {ResourceType} from "@/game/GameStore";
import ResourceComponent from "@/pages/resource-page/ResourceComponent";
import ResourceInformationPanel from "@/pages/resource-page/ResourceInformationPanel";

const ResourcePage = () => {
    return (
        <Stack
            sx={{
                gap: 2,
                justifyContent: 'flex-start',
            }}
        >
            <ResourceInformationPanel />

            <ResourceComponent
                increaseResourceBtnName={"Mine"}
                increaseWorkerBtnName={"Buy Miner"}
                resource={ResourceType.Ore}
            />

            <ResourceComponent
                increaseResourceBtnName={"Chop"}
                increaseWorkerBtnName={"Buy Lumberjack"}
                resource={ResourceType.Wood}
            />
        </Stack>
    );
};

export default ResourcePage;