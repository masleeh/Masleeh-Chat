import { useState } from "react"
import $api from "shared/lib/axiosApi/axiosApi";
import { RegisterFormType } from "../RegisterForm.types";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

type ServerRes = {
    access_token: string;
}

function isRes(res: ServerRes | unknown): res is ServerRes {
    return (<ServerRes>res).access_token !== undefined
}

const useSendRegisterData = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const navigate = useNavigate()

    const clearError = () => setError('')

    const sendRegisterData = async (registerData: RegisterFormType) => {
        setIsLoading(true)
        try {
            const {data} = await $api.post('/auth/register', {
                username: registerData.username,
                password: registerData.password
            }) 
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
        sendRegisterData,
        isLoading,
        error,
        clearError,
        isSuccess
    }
}

export default useSendRegisterData