import { getMessagesThunk } from "entities/Messages"
import { useEffect } from "react"
import { useAppDispatch } from "shared/hooks/Redux/useAppDispatch"

const useGetMessages = (conv_id?: string) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (conv_id) {
            dispatch(getMessagesThunk(conv_id))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [conv_id])
}

export default useGetMessages