import { useState } from "react"
import { LoginFormType } from "../LoginForm.types"
import $api from "shared/lib/axiosApi/axiosApi"
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

type ServerRes = {
    access_token: string;
}

function isRes(res: ServerRes | unknown): res is ServerRes {
    return (<ServerRes>res).access_token !== undefined
}

const useSendLoginData = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const navigate = useNavigate()

    const clearError = () => setError('')

    const sendLoginData = async (loginData: LoginFormType) => {
        setIsLoading(true)
        try {
            const { data } = await $api.post<ServerRes>("/auth/login", loginData)
            setIsLoading(false)
            console.log(data)
            if (isRes(data)) {
                localStorage.setItem('masleeh_chat_token', data.access_token)
                setIsSuccess(true)
                return navigate('/')
            } else {
                return setError('Unknown error')
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