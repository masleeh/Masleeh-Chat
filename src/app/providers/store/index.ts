import StoreProvider from "./ui/StoreProvider";
import type { IStateSchema, StateSchemaKey } from "./config/StateSchema";
import { AppDispatch, AppStore, createReduxStore } from "./config/store";
import TestStoreProvider from "./ui/TestStoreProvider";

export {
    StoreProvider,
    TestStoreProvider,
    createReduxStore
}

export type {
    IStateSchema,
    StateSchemaKey,
    AppStore,
    AppDispatch
}