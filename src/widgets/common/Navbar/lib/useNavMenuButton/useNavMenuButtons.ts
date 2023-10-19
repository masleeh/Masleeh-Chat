import { isAxiosError } from "axios"
import { userActions } from "entities/User"
import { useNavigate } from "react-router-dom"
import { AppRoutePaths } from "shared/config/router/AppRoutePaths"
import { useAppDispatch } from "shared/hooks/Redux/useAppDispatch"
import $api from "shared/lib/axiosApi/axiosApi"

const useNavMenuButtons = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const goToSettings = () => {
        navigate(AppRoutePaths.settings)
    }

    const logOut = async () => {
        try {
            await $api.post('/auth/logout')
            dispatch(userActions.clearUserData())
            navigate(AppRoutePaths.auth)
        } catch (error) {
            if (isAxiosError(error)) {
                console.log(error)
            }
        }
    }

    const goToConversations = () => {
        navigate(AppRoutePaths.conv)
    }

    return {
        goToSettings,
        logOut,
        goToConversations
    }
}

export default useNavMenuButtons