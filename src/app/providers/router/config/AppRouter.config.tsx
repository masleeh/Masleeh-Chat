import { AuthPage } from "pages/AuthPage"
import { IndexPage } from "pages/IndexPage"
import { RouteProps } from "react-router-dom"

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

enum AppRoutes {
    index = 'index',
    auth = 'auth'
}

export const AppRoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.index]: '/',
    [AppRoutes.auth]: '/auth'
}

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
    }
}