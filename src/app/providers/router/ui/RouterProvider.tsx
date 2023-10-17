import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom"
import { AppRoutesConfig } from "../config/AppRouter.config"
import { Suspense } from "react"
import { FallbackLoader } from "widgets/app/FallbackLoader"
import RequireAuth from "./RequireAuth"
import { AppRoutesProps } from "shared/config/router/RoutesProps"

const renderRoute = (route: AppRoutesProps):RouteObject => {
    const element = (
        <Suspense fallback={<FallbackLoader />}>
            {route.element}
        </Suspense>
    )
    
    return {
        path: route.path,
        element: route.authOnly ? <RequireAuth>{element}</RequireAuth> : element,
        children: route.nestedRoutes ?
            Object.values(route.nestedRoutes).map(renderRoute) : undefined
    }
}

const appRoutes: RouteObject[] = Object.values(AppRoutesConfig).map(renderRoute)

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter(appRoutes)

export const AppRouterProvider = () => {
    return (
        <RouterProvider router={router}/>
    )
}

