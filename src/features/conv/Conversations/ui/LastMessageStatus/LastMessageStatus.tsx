import { TConvMessage } from 'entities/Conversations';
import { getUserId } from 'entities/User';
import { memo } from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useAppSelector } from 'shared/hooks/Redux/useAppSelector';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DoneIcon from '@mui/icons-material/Done';
import { SvgIconOwnProps } from '@mui/material';

interface ILastMessageStatusProps extends SvgIconOwnProps {
    message: TConvMessage
}

const LastMessageStatus = memo(({
    message,
    ...otherProps
}:ILastMessageStatusProps) => {
    const userId = useAppSelector(getUserId)

    if (userId !== message.user_id) {

        if (message.status === 'unread') {
            return <FiberManualRecordIcon {...otherProps}/>
        } else {
            return <></>
        }
    } else {

        if (message.status === 'unread') {
            return <DoneIcon {...otherProps}/>
        } else {
            return <DoneAllIcon {...otherProps}/>
        }
    }
})

export default LastMessageStatus