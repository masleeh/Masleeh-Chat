import { IPartData } from "entities/Participant"
import { getUserId } from "entities/User"
import { useCallback } from "react"
import { useAppSelector } from "shared/hooks/Redux/useAppSelector"

const useMapDialogData = (partData: IPartData) => {
    const userId = useAppSelector(getUserId)

    const getTitle = useCallback(() => {
        if (partData.type === "private") {
            const [user] = partData.users.filter(item => item.user_id !== userId)
            return {
                title: user?.username ?? '',
                subtitle: 'last seen 10 minutes ago' 
            }
        } else return {
            title: partData.title ?? '',
            subtitle: `${partData.users.length} participants` 
        } 
    }, [userId, partData])
     

    return {
        ...getTitle()
    }
}

export default useMapDialogData