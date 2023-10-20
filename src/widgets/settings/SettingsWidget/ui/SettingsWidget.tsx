import { Grid, Paper, Typography } from "@mui/material"
import { getUserData } from "entities/User/model/selectors/getUserData/getUserData"
import { UploadProfilePic } from "features/settings/UploadProfilePic"
import { useTranslation } from "react-i18next"
import { AvatarEl } from "shared/elements/common/Avatar"
import { useAppSelector } from "shared/hooks/Redux/useAppSelector"

const SettingsWidget = () => {
    const {t} = useTranslation("settings")
    const userData = useAppSelector(getUserData)

    return (
        <Paper sx={{ p: 2, borderRadius: 3 }}>
            <Typography variant="h5">{t("settings")}</Typography>
            <Grid container spacing={2} sx={{mt: 0}}>
                <Grid item xs={5}>
                    <AvatarEl 
                        name={userData?.username ?? 'U n'} 
                        src={userData?.profile_pic ?? ""}
                        variant="rounded"
                        sx={{
                            width: '100%',
                            height: '100%',
                            fontSize: 60
                        }}
                    />
                </Grid>

                <Grid item xs={7}>
                    
                    <UploadProfilePic />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default SettingsWidget