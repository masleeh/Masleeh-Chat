import { Route, Routes } from "react-router-dom"
import { AppRoutesConfig } from "./config/AppRouter.config"
import { Suspense } from "react"
import { FallbackLoader } from "widgets/app/FallbackLoader"

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(AppRoutesConfig).map(({path, element}) => (
                <Route 
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<FallbackLoader />}>
                            {element}
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    )
}

export default AppRouter