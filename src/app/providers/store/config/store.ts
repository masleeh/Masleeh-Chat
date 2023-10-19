import { ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import { IStateSchema } from "./StateSchema"
import { userReducer } from "entities/User"
import { createReducerManager } from "./ReducerManager"
import { themeReducer } from "entities/Theme"

const rootReducers: ReducersMapObject<IStateSchema> = {
    user: userReducer,
    theme: themeReducer
}

const reducerManager = createReducerManager<IStateSchema>(rootReducers)

export const createReduxStore = (initialState?: IStateSchema) => {
    const store = configureStore({
        reducer: reducerManager.reducer,
        devTools: import.meta.env.DEV,
        preloadedState: initialState,
        enhancers: [reducerManager.enhancer]
    })

    return store
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']