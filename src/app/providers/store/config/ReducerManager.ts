import { ReducersMapObject, combineReducers } from "@reduxjs/toolkit"
import { ReducerManager } from "./StateSchema"



export function createReducerManager<IStateSchema>(initialReducers: ReducersMapObject<IStateSchema>) {
    const reducers = { ...initialReducers }
    let combinedReducer = combineReducers(reducers)
    let keysToRemove: (keyof IStateSchema)[] = []

    const reducerManager: ReducerManager<IStateSchema> = {
        getReducerMap: () => reducers,
        reducer: (state, action) => {
            if (keysToRemove.length > 0) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                state = { ...state } as any
                keysToRemove.forEach(key => {
                    delete state![key]
                })
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },
        add: (key, reducer) => {
            if (!key || reducers[key]) {
                return
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            reducers[key] = reducer as any
            combinedReducer = combineReducers(reducers)
        },
        remove: (k) => {
            const key = k as keyof IStateSchema
            if (!key || !reducers[key]) {
                return
            }
            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
        },
        enhancer: (next) => (...args) => {
            const store = next(...args)
            return {
                ...store,
                reducerManager
            }
        }

    }

    return reducerManager
}