import { Box } from "@mui/material"
import { participantReducer } from "entities/Participant"
import { DialogTitleBox } from "features/messages/DialogTitle"
import { useParams } from "react-router-dom"
import useDynamicReducer from "shared/hooks/useDynamicReducer"
import useGetDialogData from "../api/useGetDialogData/useGetDialogData"

const UserMessages = () => {
    useDynamicReducer('participants', participantReducer, false)

    const {
        conv_id
    } = useParams()

    useGetDialogData(conv_id)

    return (
        <Box
            sx={{
                width: '100%',
                height: 'calc(100vh - 80px)',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <DialogTitleBox />
        </Box>
    )
}

export default UserMessages