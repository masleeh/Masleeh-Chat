import { Paper } from "@mui/material"
import { getMessagesState } from "entities/Messages"
import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { useAppSelector } from "shared/hooks/Redux/useAppSelector"
import useGetMessages from "../../api/useGetMessages/useGetMessages"
import SingleMessage from "../SingleMessage/SingleMessage"

const DialogMessages = () => {
    const {
        conv_id
    } = useParams()

    const {
        messages
    } = useAppSelector(getMessagesState)

    useGetMessages(conv_id)

    const renderMessages = useMemo(() => {
        return messages.map((message) => (
            <SingleMessage key={message.mes_id} message={message}/>
        ))
    }, [messages])

    return (
        <Paper
            elevation={0}
            sx={{
                p: '8px 16px',
                height: '100%',
                overflowY: 'scroll',
                overflowX: 'hidden',
                scrollbarWidth: 'thin',
                display: 'flex',
                flexDirection: 'column-reverse',
                borderRadius: 0
            }}
        >
            {renderMessages}
        </Paper>
    )
}

export default DialogMessages