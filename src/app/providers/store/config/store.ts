import { Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import { IStateSchema, ReduxStoreWithManager } from "./StateSchema"
import { userReducer } from "entities/User"
import { createReducerManager } from "./ReducerManager"
import { themeReducer } from "entities/Theme"


export const createReduxStore = (initialState?: IStateSchema) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        user: userReducer,
        theme: themeReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store: ReduxStoreWithManager = configureStore<IStateSchema>({
        reducer: reducerManager.reduce as Reducer<IStateSchema>,
        devTools: import.meta.env.DEV,
        preloadedState: initialState
    })

    store.reducerManager = reducerManager

    return store 
}

export type RootState = ReturnType<typeof createReduxStore>['getState']
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']