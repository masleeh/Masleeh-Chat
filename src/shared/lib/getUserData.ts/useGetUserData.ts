import { useEffect, useState } from "react"
import $api from "../axiosApi/axiosApi"
import { getUserDataSchema, getUserDataType } from "./getUserData.types"
import { useAppDispatch } from "shared/hooks/Redux/useAppDispatch"
import { userActions } from "entities/User"


const useGetUserData = () => {
    const [inited, setInited] = useState(false)
    const dispatch = useAppDispatch()

    const getUserData = async () => {
        try {
            const { data } = await $api.get<getUserDataType>('/auth/refresh')
            const checkData = await getUserDataSchema.safeParseAsync(data)
            if (checkData.success) {
                dispatch(userActions.setUserData(data.userData))
                localStorage.setItem(import.meta.env.VITE_LOCALSTORAGE_TOKEN_KEY, checkData.data.access_token)
            }
            return setInited(true)
        } catch (error) {
            setInited(true)
        }
    }

    useEffect(() => {
        getUserData()
    })

    return {
        inited,
    }
}

export default useGetUserData