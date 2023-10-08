import { isAxiosError } from "axios";
import { getUserId } from "entities/User/model/selectors/getUserId/getUserId";
import { useState } from "react"
import { useSelector } from "react-redux";
import $api from "shared/lib/axiosApi/axiosApi";
import { CreateConvResSchema, CreateConvResType, ICreateConversationDto } from "../SearchUser.types";
import { useNavigate } from "react-router-dom";

const useCreateConversation = () => {
    const userId = useSelector(getUserId)
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const [selectedId, setSelectedId] = useState("")

    const clearError = () => setError('')

    const createConversation = async (foundUserId: string) => {
        setSelectedId(foundUserId)
        setIsLoading(true)
        const requestData: ICreateConversationDto = {
            user_id: userId,
            user_ids: [userId, foundUserId],
            type: 'private'
        }
        try {
            const { data } = await $api.post<CreateConvResType>('/conversations', requestData)
            const validateRes = CreateConvResSchema.safeParse(data)
            setIsLoading(false)
            if (validateRes.success) {
                setIsSuccess(true)
                return navigate(`/conv/${validateRes.data.conv_id}`)
            } else {
                return setError(validateRes.error.message)
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
        createConversation,
        selectedId
    }
}

export default useCreateConversation