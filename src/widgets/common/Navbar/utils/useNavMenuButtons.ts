import { useNavigate } from "react-router-dom"
import { AppRoutePaths } from "shared/config/router/AppRoutePaths"

const useNavMenuButtons = () => {
    const navigate = useNavigate()

    const goToSettings = () => {
        navigate(AppRoutePaths.settings)
    }

    const logOut = () => {
        
        navigate(AppRoutePaths.auth)
    }

    return {
        goToSettings,
        logOut
    }
}

export default useNavMenuButtons