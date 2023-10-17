import { useNavigate } from "react-router-dom"

const useNavMenuButtons = () => {
    const navigate = useNavigate()

    const goToSettings = () => {
        navigate('/settings')
    }

    const logOut = () => {
        navigate('/auth')
    }

    return {
        goToSettings,
        logOut
    }
}

export default useNavMenuButtons