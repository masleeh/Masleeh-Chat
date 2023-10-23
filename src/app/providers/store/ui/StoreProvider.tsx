import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "../config/StateSchema";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";

interface IStoreProviderProps {
    children: React.ReactNode;
    initialState?: DeepPartial<IStateSchema>
}

const StoreProvider = ({
    children
}:IStoreProviderProps) => {
    const store = createReduxStore()

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StoreProvider