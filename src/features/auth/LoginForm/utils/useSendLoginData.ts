import { useState } from "react"
import { LoginFormType } from "../LoginForm.types"
import $api from "shared/lib/axiosApi/axiosApi"
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { getUserDataSchema, getUserDataType } from "shared/lib/getUserData.ts/getUserData.types";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { userActions } from "entities/User";

const useSendLoginData = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const clearError = () => setError('')

    const sendLoginData = async (loginData: LoginFormType) => {
        setIsLoading(true)
        try {
            const { data } = await $api.post<getUserDataType>("/auth/login", loginData)
            const checkData = getUserDataSchema.safeParse(data)
            setIsLoading(false)
            if (checkData.success) {
                localStorage.setItem('masleeh_chat_token', checkData.data.access_token)
                dispatch(userActions.setUserData(checkData.data.userData))
                setIsSuccess(true)
                return navigate('/')
            } else {
                return setError(checkData.error.message)
            }
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            if (isAxiosError(error)) {
                return setError(error.response!.data.message ?? 'Unknown error')
            } else {
                return setError('Unknown error')
            }
        }
    }

    return {
        isLoading,
        error,
        clearError,
        isSuccess,
        sendLoginData
    }
}

export default useSendLoginData