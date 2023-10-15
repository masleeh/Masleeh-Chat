import { Box, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';
import { AvatarEl } from 'shared/elements/common/Avatar';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import useConvClick from '../../lib/useConvClick/useConvClick';

interface IConvItemProps {
    username: string;
    lastMessage?: string;
    profilePic: string | undefined;
    convId: string;
    isSelected: boolean;
}

const ConvItem = ({
    username,
    lastMessage,
    profilePic,
    convId,
    isSelected,
}:IConvItemProps) => {
    const {handleConvClick} = useConvClick()

    return (
        <ListItem
            sx={{
                bgcolor: (isSelected) ? 'primary.light' : 'primary.inverted'
            }}
            onClick={() => handleConvClick(convId)}
        >
            <ListItemAvatar>
                <AvatarEl src={profilePic} name={username} sx={{
                    
                }}/>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Typography 
                        variant='subtitle1'
                        color={isSelected ? 'white' : 'black'}
                    >{username}</Typography>
                }
                secondaryTypographyProps={{
                    component: Box,
                }}
                secondary={
                    <Stack 
                        direction="row" 
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography 
                            variant="body2"
                            color={isSelected ? 'white' : 'gray'}
                            component="span"
                        >
                            {lastMessage ?? ''}
                        </Typography>
                        {(username) ? (
                            <DoneAllIcon sx={{
                                color: isSelected ? 'primary.contrastText' : 'primary.light'
                            }} />
                        ) : (
                            <DoneIcon />
                        )}
                    </Stack>
                }
            />
        </ListItem>
    )
}

export default ConvItem