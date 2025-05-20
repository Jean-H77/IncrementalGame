import React from 'react';
import {ResourceType, useResourceStore} from "@/game/GameStore";
import {Typography} from "@mui/material";

const ResourceList = () => {
    const ore = useResourceStore(state => state.resources[ResourceType.Ore]);
    const wood = useResourceStore(state => state.resources[ResourceType.Wood])

    return (
        <Typography component={'span'} variant="body2">
            <span>🪨 Ore: {Math.trunc(ore)}</span>
            <br/>
            <span>🪵 Wood: {Math.trunc(wood)}</span>
        </Typography>
    );
};

export default ResourceList;