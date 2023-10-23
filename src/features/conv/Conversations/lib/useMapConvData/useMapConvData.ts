import { TConvItem } from "entities/Conversations"
import { getUserId } from "entities/User"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const useMapConvData = (partData: TConvItem) => {
    const convParams = useParams()
    const userId = useSelector(getUserId)
    const [userData] = partData.users.filter(item => item.user_id !== userId)
    const [message] = partData.message

    const date = new Date(partData.updatedAt)
    const todayDate = new Date()
    let formattedTime

    if (todayDate.toDateString() === date.toDateString()) {
        formattedTime = date.toLocaleString("ru-Ru", {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            hour: 'numeric',
            minute: 'numeric'
        })
    } else {
        formattedTime = date.toLocaleString("ru-Ru", {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            month: 'numeric',
            day: 'numeric',
            year: 'numeric'
        })
    }

    return {
        pic: partData.type === 'private' ? userData?.profile_pic ?? '' : '',
        last_message: message,
        conv_id: partData.conv_id,
        title: partData.type === 'private' ? userData?.username ?? '' : partData.title ?? '',
        isSelected: convParams.conv_id === partData.conv_id,
        updateTime: formattedTime ?? '',
    }
}

export default useMapConvData