import { create } from 'zustand'

export enum ResourceType {
    Ore = 'ore',
    Wood = 'wood'
}

type ResourceMap = Record<ResourceType, number>

interface ResourceState {
    resources: ResourceMap
    workers: ResourceMap
    increaseResource: (type: ResourceType, by: number) => void
    increaseWorker: (type: ResourceType, by: number) => void
}

export const useResourceStore = create<ResourceState>((set) => ({
    resources: {
        [ResourceType.Ore]: 0,
        [ResourceType.Wood]: 0
    },
    workers: {
        [ResourceType.Ore]: 0,
        [ResourceType.Wood]: 0
    },
    increaseResource: (type, by) =>
        set((state) => ({
            resources: {
                ...state.resources,
                [type]: state.resources[type] + by
            }
        })),
    increaseWorker: (type, by) =>
        set((state) => ({
            workers: {
                ...state.workers,
                [type]: state.workers[type] + by
            }
        }))
}))

interface CurrencyState {
    coins: number
    incrementCoins: (by: number) => void
    decreaseCoins: (by: number) => void
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
    coins: 100,
    incrementCoins: (by: number) =>
        set((state) => ({
            coins: state.coins + by,
        })),
    decreaseCoins: (by: number) =>
        set((state) => ({
            coins: state.coins - by,
        }))
}));