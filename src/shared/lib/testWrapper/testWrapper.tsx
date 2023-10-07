import { render } from "@testing-library/react"
import { StoreProvider, IStateSchema } from "app/providers/store";
import i18nTest from 'shared/config/i18n/i18nTest'
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router-dom";
import { DeepPartial } from "@reduxjs/toolkit";

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<IStateSchema>
}

const testWrapper = (component: React.ReactNode, options: componentRenderOptions = {}) => {
    const {
        route = '/',
        initialState
    } = options

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}

export default testWrapper