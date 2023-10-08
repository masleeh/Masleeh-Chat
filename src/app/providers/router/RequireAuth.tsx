import { getUserData } from "entities/User/model/selectors/getUserData/getUserData"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { AppRoutePaths } from "./config/AppRouter.config"


const RequireAuth = ({children}: {children: JSX.Element}) => {
    const auth = useSelector(getUserData)
    const location = useLocation()

    if (!auth) {
        return <Navigate to={AppRoutePaths.auth} state={{ from: location }} replace/>
    } else {
        return children
    }
}

export default RequireAuth