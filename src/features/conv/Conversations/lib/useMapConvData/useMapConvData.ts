import { TConvItem } from "entities/Conversations"
import { getUserId } from "entities/User"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const useMapConvData = (partData: TConvItem) => {
    const convParams = useParams()
    const userId = useSelector(getUserId)
    const [userData] = partData.users.filter(item => item.user_id !== userId)

    return {
        pic: partData.type === 'private' ? userData?.profile_pic ?? '' : '',
        last_message: partData.last_message,
        conv_id: partData.conv_id,
        title: partData.type === 'private' ? userData?.username ?? '' : partData.title ?? '',
        isSelected: convParams.conv_id === partData.conv_id
    }
}

export default useMapConvData