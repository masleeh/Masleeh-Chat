import { render } from "@testing-library/react"
import { IStateSchema, TestStoreProvider } from "app/providers/store";
import i18nTest from 'shared/config/i18n/i18nTest'
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router-dom";
import { DeepPartial, EnhancedStore } from "@reduxjs/toolkit";
import { AppThemeProvider } from "app/providers/theme";

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<IStateSchema>;
    store?: EnhancedStore
}

const testWrapper = (component: React.ReactNode, options: componentRenderOptions = {}) => {
    const {
        route = '/',
        initialState,
        store
    } = options

    return render(
        <TestStoreProvider initialState={initialState} store={store}>
            <AppThemeProvider>
                <MemoryRouter initialEntries={[route]}>
                    <I18nextProvider i18n={i18nTest}>
                        {component}
                    </I18nextProvider>
                </MemoryRouter>
            </AppThemeProvider>
        </TestStoreProvider>
    )
}

export default testWrapper