import { Alert, AlertTitle } from "@mui/material"
import { useTranslation } from "react-i18next"
import TagFacesIcon from '@mui/icons-material/TagFaces';

const IndexAlert = () => {
    const {t} = useTranslation("messages")
    return (
        <Alert 
            severity="info" 
            sx={{
                width: '100%'
            }}
            icon={<TagFacesIcon fontSize="large"/>}
        >
            <AlertTitle>{t("m_index_alert_title")}</AlertTitle>
            {t("m_new_features")}
        </Alert>
    )
}

export default IndexAlert