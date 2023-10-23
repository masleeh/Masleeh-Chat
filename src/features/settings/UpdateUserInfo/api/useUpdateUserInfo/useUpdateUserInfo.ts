import { useState } from "react"
import { UpdateUserInfoType, UpdateUserSchemaRes } from "../../model/types/UpdateUserInfo.types"
import $api from "shared/lib/axiosApi/axiosApi"
import { useAppSelector } from "shared/hooks/Redux/useAppSelector"
import { getUserId, userActions } from "entities/User"
import { useAppDispatch } from "shared/hooks/Redux/useAppDispatch"
import { isAxiosError } from "axios"

const useUpdateUserInfo = (onSuccess?: () => void) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const clearError = () => setError('')

    const userId = useAppSelector(getUserId)
    const dispatch = useAppDispatch()

    const updateUserInfo = async (formData: UpdateUserInfoType) => {
        setIsLoading(true)
        try {
            const {data} = await $api.patch('/user', {
                user_id: userId,
                ...formData
            })
            const checkData = UpdateUserSchemaRes.safeParse(data)
            setIsLoading(false)
            if (checkData.success) {
                dispatch(userActions.setUserData(checkData.data))
                onSuccess && onSuccess()
            } else {
                return setError(checkData.error.message)
            }
        } catch (error) {
            setIsLoading(false)
            if (isAxiosError(error)) {
                setError(error.response?.data.message)
            }
        }
    }

    return {
        isLoading,
        error,
        clearError,
        updateUserInfo
    }
}

export default useUpdateUserInfo