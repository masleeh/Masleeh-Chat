import { AnyAction, CombinedState, Reducer, ReducersMapObject, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { IConvSchema } from "entities/Conversations/model/types/conversations.state";
import { IThemeSchema } from "entities/Theme";
import { IUserSchema } from "entities/User";

export interface IStateSchema {
    user: IUserSchema;
    theme: IThemeSchema;

    // Async Reducers
    coversation?: IConvSchema;
}

export type StateSchemaKey = keyof IStateSchema

export interface ReduxStoreWithManager extends ToolkitStore
    <IStateSchema, AnyAction, [ThunkMiddleware<IStateSchema, AnyAction>]> {
    reducerManager?: ReducerManager
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>;
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}