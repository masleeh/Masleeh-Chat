import { Divider, Paper } from "@mui/material"
import { participantReducer } from "entities/Participant"
import { DialogTitleBox } from "features/messages/DialogTitle"
import { useParams } from "react-router-dom"
import useDynamicReducer from "shared/hooks/useDynamicReducer"
import useGetDialogData from "../api/useGetDialogData/useGetDialogData"
import { DialogMessages } from "features/messages/DialogMessages"
import { messagesReducer } from "entities/Messages"
import { DialogTextArea } from "features/messages/DialogTextArea"

const UserMessages = () => {
    useDynamicReducer('participants', participantReducer, false)
    useDynamicReducer('messages', messagesReducer, false)

    const {
        conv_id
    } = useParams()

    useGetDialogData(conv_id)

    return (
        <Paper
            elevation={4}
            sx={{
                width: '100%',
                height: 'calc(100vh - 96px)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 6

            }}
        >
            <DialogTitleBox />
            <Divider />
            <DialogMessages />
            <Divider />
            <DialogTextArea />
        </Paper>
    )
}

export default UserMessages