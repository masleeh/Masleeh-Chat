import { Route, Routes } from "react-router-dom"
import { AppRoutesConfig, AppRoutesProps } from "./config/AppRouter.config"
import { Suspense, useCallback } from "react"
import { FallbackLoader } from "widgets/app/FallbackLoader"
import RequireAuth from "./RequireAuth"

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