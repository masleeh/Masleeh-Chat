import { AxiosProgressEvent, isAxiosError } from "axios"
import { getUserId, userActions } from "entities/User"
import { useState } from "react"
import { useAppSelector } from "shared/hooks/Redux/useAppSelector"
import $api from "shared/lib/axiosApi/axiosApi"
import { uploadProficePicResSchema } from "../../model/types/UploadProfilePic.types"
import { useAppDispatch } from "shared/hooks/Redux/useAppDispatch"

const useGetFile = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [loadProgress, setLoadProgress] = useState(0)

    const onUploadProgress = (event: AxiosProgressEvent) => {
        const percentage = Math.round((100 * event.loaded) / (event.total ?? 1))
        setLoadProgress(percentage)
    } 

    const userId = useAppSelector(getUserId)
    const dispatch = useAppDispatch()

    const uploadFile = async (files: File) => {
        setIsLoading(true)
        try {
            const {data} = await $api.post('/user/pic', {
                user_id: userId,
                image: files
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress
            })
            const checkData = uploadProficePicResSchema.safeParse(data)
            setIsLoading(false)
            if (checkData.success) {
                return dispatch(userActions.setProfilePic(checkData.data.profile_pic)) 
            } else {
                return setError(checkData.error.message)
            }
        } catch (error) {
            setIsLoading(false)
            if (isAxiosError(error)) {
                setError(error.response?.data.message)
            } else {
                console.log(error)
            }
        }
    }

    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            uploadFile(event.target.files[0])
        }
    }

    return {
        handleChangeFile,
        isLoading,
        error,
        loadProgress
    }
}

export default useGetFile