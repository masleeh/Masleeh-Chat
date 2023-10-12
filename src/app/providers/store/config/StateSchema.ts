import { AnyAction, CombinedState, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { IConvSchema } from "entities/Conversations/model/types/conversations.state";
import { IUserSchema } from "entities/User";

export interface IStateSchema {
    user: IUserSchema;

    // Async Reducers
    coversation?: IConvSchema;
}

export type StateSchemaKey = keyof IStateSchema

export interface ReduxStoreWithManager extends ToolkitStore<IStateSchema> {
    reducerManager?: ReducerManager
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>;
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}