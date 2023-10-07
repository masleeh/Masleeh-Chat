import { memo } from "react"
import { SearchUsersServerRes } from "../../utils/useSearchUser"
import { Alert, CircularProgress, ListItemAvatar, ListItemIcon, ListItemText, MenuItem } from "@mui/material"
import { AvatarEl } from "shared/elements/common/Avatar"
import { useTranslation } from "react-i18next"
import useCreateConversation from "../../utils/useCreateConversation"

interface IFoundUsersProps {
    data: SearchUsersServerRes[]
}

const FoundUsers = memo(({
    data
}:IFoundUsersProps) => {
    const {t} = useTranslation(["conversations"])

    const {
        isLoading,
        createConversation,
        selectedId
    } = useCreateConversation()

    if (data.length < 1) {
        return (
            <Alert variant="outlined" severity="info" icon={false}>
                {t("user_not_found")}
            </Alert>
        )
    } else return data.map((item, index) => (
        <MenuItem
            key={index}
            onClick={() => createConversation(item.user_id)}
            disabled={isLoading}
        >
            <ListItemAvatar>
                <AvatarEl 
                    src={item.profile_pic} 
                    name={item.username}
                    alt={item.username} 
                />
            </ListItemAvatar>
            <ListItemText>{item.username}</ListItemText>
            {(isLoading && selectedId === item.user_id) ? <ListItemIcon>
                <CircularProgress size={25} />
            </ListItemIcon> : null}
        </MenuItem>
    ))
})

export default FoundUsers