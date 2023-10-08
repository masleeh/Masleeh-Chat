import { ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import { IStateSchema } from "./StateSchema"
import { userReducer } from "entities/User"


export const createReduxStore = (initialState?: IStateSchema) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        user: userReducer
    }

    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState
    })
}

export type RootState = ReturnType<typeof createReduxStore>['getState']
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']