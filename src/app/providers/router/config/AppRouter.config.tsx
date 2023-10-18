import { AuthPage } from "pages/AuthPage"
import { ConvPage } from "pages/ConvPage"
import { IndexPage } from "pages/IndexPage"
import { AppRoutePaths, AppRoutes } from "shared/config/router/AppRoutePaths"
import { AppRoutesProps } from "shared/config/router/RoutesProps"
import { ConvRoutesConfig } from "./ConvRoutes.config"
import { SettingsPage } from "pages/SettingsPage"

export const AppRoutesConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.index]: {
        path: AppRoutePaths.index,
        element: <IndexPage />,
        authOnly: true
    },
    [AppRoutes.auth]: {
        path: AppRoutePaths.auth,
        element: <AuthPage />,
        authOnly: false
    },
    [AppRoutes.conv]: {
        path: AppRoutePaths.conv,
        element: <ConvPage />,
        authOnly: true,
        nestedRoutes: ConvRoutesConfig
    },
    [AppRoutes.settings]: {
        path: AppRoutePaths.settings,
        element: <SettingsPage />,
        authOnly: true
    }
}