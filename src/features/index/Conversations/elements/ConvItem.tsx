import { ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';
import React from 'react';
import { memo } from 'react';
import { AvatarEl } from 'shared/elements/common/Avatar';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';

interface IConvItemProps {
    username: string;
    last_message?: string;
    profile_pic: string | undefined;
    conv_id: string;
    isSelected: boolean;
    viewed: boolean;
}

const ConvItem = memo(({
    username,
    last_message,
    profile_pic,
    conv_id,
    isSelected,
    viewed
}:IConvItemProps) => {

    return (
        <ListItem
            sx={{
                bgcolor: (isSelected) ? 'primary.light' : 'primary.inverted'
            }}
        >
            <ListItemAvatar>
                <AvatarEl src={profile_pic} name={username} sx={{
                    
                }}/>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Typography 
                        variant='subtitle1'
                        color={isSelected ? 'white' : 'black'}
                    >{username}</Typography>}
                secondary={
                    <React.Fragment>
                        <Typography 
                            variant="body2"
                            color={isSelected ? 'white' : 'gray'}
                            component="span"
                        >
                            {last_message ?? ''}
                        </Typography>
                        {viewed ? (
                            <DoneAllIcon sx={{
                                color: isSelected ? 'primary.contrastText' : 'primary.light'
                            }} />
                        ) : (
                            <DoneIcon />
                        )}
                    </React.Fragment>
                }
            />
        </ListItem>
    )
})

export default ConvItem