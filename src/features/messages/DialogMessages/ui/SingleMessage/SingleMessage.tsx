import { Paper, Typography } from '@mui/material';
import { IMessage } from 'entities/Messages';
import { getUserId } from 'entities/User';
import { memo } from 'react';
import { useAppSelector } from 'shared/hooks/Redux/useAppSelector';

interface ISingleMessageProps {
    message: IMessage
}

const SingleMessage = memo(({
    message
}:ISingleMessageProps) => {
    const userId = useAppSelector(getUserId)

    return (
        <Paper
            elevation={2}
            sx={{
                ml: (userId === message.user_id) ? 'auto' : 0,
                mr: (userId === message.user_id) ? 0 : 'auto',
                maxWidth: 450,
                p: '8px 8px',
                mt: 1,
                width: 'fit-content',
                borderRadius: 3,
                bgcolor: (userId === message.user_id) ? 'primary.main' : '',
            }}
        >
            <Typography 
                variant="subtitle2"
                sx={{
                    overflowWrap: 'break-word'
                }}
            >
                {message.body}
            </Typography>
        </Paper>
    )
})

export default SingleMessage