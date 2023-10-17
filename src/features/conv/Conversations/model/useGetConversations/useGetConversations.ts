import { getConvState, getConvsThunk } from "entities/Conversations"
import { getUserId } from "entities/User"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/hooks/useAppDispatch"

const useGetConversations = () => {
    const dispatch = useAppDispatch()
    const user_id = useSelector(getUserId)

    const {
        isLoading,
        error,
        convData
    } = useSelector(getConvState)

    useEffect(() => {
        dispatch(getConvsThunk(user_id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user_id])

    return {
        isLoading,
        error,
        convData
    }
}

export default useGetConversations