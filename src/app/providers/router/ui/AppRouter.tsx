import { Route, Routes } from "react-router-dom"
import { AppRoutesConfig } from "../config/AppRouter.config"
import { Suspense, useCallback } from "react"
import { FallbackLoader } from "widgets/app/FallbackLoader"
import RequireAuth from "./RequireAuth"
import { AppRoutesProps } from "shared/config/router/RoutesProps"

const AppRouter = () => {
    const renderRoutes = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<FallbackLoader />}>
                {route.element}
            </Suspense>
        )

        return (
            <Route 
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
                children={
                    route.nestedRoutes ? (
                        Object.values(route.nestedRoutes).map(renderRoutes)
                    ) : undefined
                }
            />
        )
    }, [])

    return (
        <Routes>
            {Object.values(AppRoutesConfig).map(renderRoutes)}
        </Routes>
    )
}

export default AppRouter