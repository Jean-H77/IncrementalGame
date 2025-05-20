import {ResourceType, useResourceStore} from "@/game/GameStore";

const BASE_RESOURCE_SPEED = 0.01;
const TIME_STEP = 1000 / 60;

let lastTime: number | null = null;
let accumulatedLag = 0;

export function startGameLoop() {
    const increaseResource = useResourceStore.getState().increaseResource;

    const update = (delta: number) => {
        const seconds = delta / 1000;
        const currentOreWorkers = useResourceStore.getState().workers[ResourceType.Ore];
        const currentWoodWorkers = useResourceStore.getState().workers[ResourceType.Wood];

        increaseResource(ResourceType.Ore, BASE_RESOURCE_SPEED * currentOreWorkers * seconds);
        increaseResource(ResourceType.Wood, BASE_RESOURCE_SPEED * currentWoodWorkers * seconds);
    };

    const gameLoop = (currentTime: number) => {
        if (lastTime === null) lastTime = currentTime;

        const delta = currentTime - lastTime;
        lastTime = currentTime;
        accumulatedLag += delta;

        while (accumulatedLag >= TIME_STEP) {
            update(TIME_STEP);
            accumulatedLag -= TIME_STEP;
        }

        requestAnimationFrame(gameLoop);
    };

    requestAnimationFrame(gameLoop);
}