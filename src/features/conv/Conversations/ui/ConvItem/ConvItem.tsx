import { Box, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { AvatarEl } from 'shared/elements/common/Avatar';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import useConvClick from '../../lib/useConvClick/useConvClick';
import { TConvItem } from 'entities/Conversations';
import useMapConvData from '../../lib/useMapConvData/useMapConvData';
import { memo } from 'react';

interface IConvItemProps {
    partData: TConvItem;
}

const ConvItem = memo(({
    partData,
}:IConvItemProps) => {
    const {handleConvClick} = useConvClick()
    const {
        conv_id,
        title,
        last_message,
        pic,
        isSelected
    } = useMapConvData(partData)

    return (
        <ListItemButton
            selected={isSelected}
            sx={{
                '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    '&:hover': {
                        bgcolor: 'primary.light'
                    }
                },
                borderRadius: 4
            }}
            onClick={isSelected ? undefined : () => handleConvClick(conv_id)}
        >
            <ListItemAvatar>
                <AvatarEl src={pic} name={title ?? ''} sx={{
                    
                }}/>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Typography 
                        variant='subtitle1'
                        color={isSelected ? 'white' : 'black'}
                    >{title}</Typography>
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
                            {last_message ?? ''}
                        </Typography>
                        {(title) ? (
                            <DoneAllIcon sx={{
                                color: isSelected ? 'primary.contrastText' : 'primary.light'
                            }} />
                        ) : (
                            <DoneIcon />
                        )}
                    </Stack>
                }
            />
        </ListItemButton>
    )
})

export default ConvItem