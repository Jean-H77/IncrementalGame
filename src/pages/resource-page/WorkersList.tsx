import React from 'react';
import {ResourceType, useResourceStore} from "@/game/GameStore";
import {Typography} from "@mui/material";

const WorkersList = () => {
    const oreWorkers = useResourceStore((state) => state.workers[ResourceType.Ore]);
    const woodWorkers = useResourceStore((state) => state.workers[ResourceType.Wood]);

    return (
        <Typography component={'span'} variant="body2">
            <span>⛏️ Miners: {oreWorkers}</span>
            <br/>
            <span>🪓 Lumberjacks: {woodWorkers}</span>
        </Typography>

    );
};

export default WorkersList;