import { DeepPartial, EnhancedStore } from "@reduxjs/toolkit";
import { IStateSchema } from "../config/StateSchema";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";

interface IStoreProviderProps {
    children: React.ReactNode;
    initialState?: DeepPartial<IStateSchema>,
    store?: EnhancedStore
}

const TestStoreProvider = ({
    children,
    initialState = {},
    store = createReduxStore(initialState as IStateSchema)
}:IStoreProviderProps) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default TestStoreProvider