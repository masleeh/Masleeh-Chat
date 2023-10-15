import { List } from '@mui/material';
import { memo, useMemo } from 'react';
import ConvItem from '../ConvItem/ConvItem';
import useDynamicReducer from 'shared/hooks/useDynamicReducer';
import { convReducer } from 'entities/Conversations';
import useGetConversations from '../../model/useGetConversations/useGetConversations';
import ConvItemSkeleton from '../ConvItemSkeleton/ConvItemSkeleton';

const Conversations = memo(() => {
    useDynamicReducer('coversation', convReducer, false)
    const {
        isLoading,
        error,
        convData
    } = useGetConversations()

    const convItems = useMemo(() => {
        return convData.map((item) => (
            <ConvItem 
                key={item.conv_id}
                username={item.username}
                profilePic={item.profile_pic}
                convId={item.conv_id}
                lastMessage={item.last_message}
                isSelected={true}
            />
        ))
    }, [convData])

    return (
        <List
            sx={{
                width: '100%',
                height: 'calc(100vh - 152px)',
                overflowY: 'scroll',
                scrollbarWidth: 'thin'
            }}
        >
            {isLoading ? (
                Array(10).fill(1).map(() => (
                    <ConvItemSkeleton />
                ))
            ) : (
                convItems   
            )}
        </List>
    )
})

export default Conversations