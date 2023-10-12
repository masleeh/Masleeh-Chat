import { List } from '@mui/material';
import { memo } from 'react';
import ConvItem from './elements/ConvItem';
import useDynamicReducer from 'shared/hooks/useDynamicReducer';
import { convReducer } from './model/slice/conversations.slice';

const Conversations = memo(() => {
    useDynamicReducer('coversation', convReducer, false)

    return (
        <List
            sx={{
                width: '100%',
                height: 'calc(100vh - 152px)',
                overflowY: 'scroll',
                scrollbarWidth: 'thin'
            }}
        >
            <ConvItem 
                username="masleeh"
                profile_pic={undefined}
                conv_id='12345'
                last_message={'hahaha'}
                isSelected={true}
                viewed={true}
            />
        </List>
    )
})

export default Conversations