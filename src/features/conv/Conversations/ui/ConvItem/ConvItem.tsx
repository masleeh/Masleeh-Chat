import { Box, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { AvatarEl } from 'shared/elements/common/Avatar';
import useConvClick from '../../lib/useConvClick/useConvClick';
import { TConvItem } from 'entities/Conversations';
import useMapConvData from '../../lib/useMapConvData/useMapConvData';
import { memo } from 'react';
import LastMessageStatus from '../LastMessageStatus/LastMessageStatus';

interface IConvItemProps {
    partData: TConvItem;
}

const ConvItem = memo(({
    partData,
}:IConvItemProps) => {
    const {handleConvClick} = useConvClick(partData)
    const {
        conv_id,
        title,
        last_message,
        pic,
        isSelected,
        updateTime
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
                <AvatarEl src={pic} name={title ?? ''} />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography 
                            variant='subtitle1'
                            color={isSelected ? 'primary.contrastText' : '.palette.text.primary'}
                        >{title}</Typography>

                        <Typography 
                            variant='caption'
                            color={isSelected ? 'primary.contrastText' : 'text.secondary'}
                        >{updateTime}</Typography>
                    </Stack>
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
                            sx={{
                                overflowInline: 'hidden'
                            }}
                        >
                            {last_message.body ?? ''}
                        </Typography>
                        <LastMessageStatus 
                            message={last_message}
                            sx={{
                                color: isSelected ? 'primary.contrastText' : 'primary.light'
                            }}
                        />
                    </Stack>
                                
                }
            />
        </ListItemButton>
    )
})

export default ConvItem