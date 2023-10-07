import { AuthPage } from "pages/AuthPage"
import { IndexPage } from "pages/IndexPage"
import { RouteProps } from "react-router-dom"

enum AppRoutes {
    index = 'index',
    auth = 'auth'
}

const AppRoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.index]: '/',
    [AppRoutes.auth]: '/auth'
}

export const AppRoutesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.index]: {
        path: AppRoutePaths.index,
        element: <IndexPage />
    },
    [AppRoutes.auth]: {
        path: AppRoutePaths.auth,
        element: <AuthPage />
    }
}