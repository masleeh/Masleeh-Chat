import { Box } from "@mui/material"
import { participantReducer } from "entities/Participant"
import { DialogTitleBox } from "features/messages/DialogTitle"
import useDynamicReducer from "shared/hooks/useDynamicReducer"

const UserMessages = () => {
    useDynamicReducer('participants', participantReducer, false)

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