import { useState } from "react"
import $api from "shared/lib/axiosApi/axiosApi";
import { RegisterFormType } from "../model/types/RegisterForm.types";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { getUserDataSchema } from "shared/lib/getUserData.ts/getUserData.types";
import { useAppDispatch } from "shared/hooks/Redux/useAppDispatch";
import { userActions } from "entities/User";

const useSendRegisterData = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const clearError = () => setError('')

    const sendRegisterData = async (registerData: RegisterFormType) => {
        setIsLoading(true)
        try {
            const {data} = await $api.post('/auth/register', {
                username: registerData.username,
                password: registerData.password
            })
            const checkData = getUserDataSchema.safeParse(data) 
            if (checkData.success) {
                localStorage.setItem(import.meta.env.VITE_LOCALSTORAGE_TOKEN_KEY, checkData.data.access_token)
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
        sendRegisterData,
        isLoading,
        error,
        clearError,
        isSuccess
    }
}

export default useSendRegisterData