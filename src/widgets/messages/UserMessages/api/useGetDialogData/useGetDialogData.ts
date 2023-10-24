import { getDialogDataThunk, getDialogState } from "entities/Participant"
import { useEffect } from "react"
import { useAppDispatch } from "shared/hooks/Redux/useAppDispatch"
import { useAppSelector } from "shared/hooks/Redux/useAppSelector"

const useGetDialogData = (conv_id?: string) => {
    const dispatch = useAppDispatch()
    const dialogState = useAppSelector(getDialogState)

    const getDialogData = () => {
        if (!dialogState._inited && conv_id) {
            dispatch(getDialogDataThunk(conv_id))
        }
    }

    useEffect(() => {
        getDialogData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [conv_id])
}

export default useGetDialogData