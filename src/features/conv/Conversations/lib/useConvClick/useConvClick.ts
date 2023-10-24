import { TConvItem } from "entities/Conversations"
import { participantActions } from "entities/Participant"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "shared/hooks/Redux/useAppDispatch"

const useConvClick = (partData: TConvItem) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleConvClick = (conv_id: string) => {
        dispatch(participantActions.setPartData({
            type: partData.type,
            title: partData.title,
            users: partData.users
        }))
        navigate(`/conv/${conv_id}`)
    }

    return {
        handleConvClick
    }
}

export default useConvClick