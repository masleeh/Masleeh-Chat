import { Paper, Typography } from "@mui/material"
import { getUserData } from "entities/User/model/selectors/getUserData/getUserData"
import { ChangeTheme } from "features/settings/ChangeTheme"
import { UpdateUserInfo } from "features/settings/UpdateUserInfo"
import { UploadProfilePic } from "features/settings/UploadProfilePic"
import { useTranslation } from "react-i18next"
import { AvatarEl } from "shared/elements/common/Avatar"
import { useAppSelector } from "shared/hooks/Redux/useAppSelector"

const SettingsWidget = () => {
    const {t} = useTranslation("settings")
    const userData = useAppSelector(getUserData)

    return (
        <Paper 
            sx={{ 
                p: 2, 
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                rowGap: 2 
            }}
        >
            <Typography variant="h4">{t("settings")}</Typography>
            <AvatarEl 
                name={userData?.username ?? 'U n'} 
                src={userData?.profile_pic ?? ""}
                variant="circular"
                sx={{
                    width: '100%',
                    maxWidth: 300,
                    aspectRatio: "1 / 1",
                    height: '100%',
                    fontSize: 60
                }}
            />
            <Typography variant="h3">
                {userData?.username ?? ""}
            </Typography>
            <UploadProfilePic />
            <UpdateUserInfo />
            <Typography variant="h5" sx={{mt: 1}}>
                {t("s_change_theme")}
            </Typography>
            <ChangeTheme />
        </Paper>
    )
}

export default SettingsWidget