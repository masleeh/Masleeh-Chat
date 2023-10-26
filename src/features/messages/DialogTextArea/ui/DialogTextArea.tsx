import { Avatar, InputBase, Paper } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useTranslation } from "react-i18next";

const DialogTextArea = () => {
    const { t } = useTranslation("messages")
    return (
        <Paper
            elevation={4}
            sx={{
                minHeight: 56,
                height: 'fit-content',
                display: 'flex',
                flexDirection: 'row',
                p: '8px 16px',
                overflow: 'hidden'
            }}
        >
            <InputBase 
                sx={{
                    width: '100%',
                    overflowWrap: 'break-word'
                }}
                multiline
                placeholder={t("m_write_a_message")}
            />
            <Avatar
                component="button"
                sx={{
                    bgcolor: 'primary.main'
                }}
            >
                <SendIcon sx={{ml: 0.5}} />
            </Avatar>
        </Paper>
    )
}

export default DialogTextArea