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
        convData
    } = useGetConversations()

    const convItems = useMemo(() => {
        return convData
            // .filter((partData) => Boolean(partData.last_message))
            .map((partData) => (
                <ConvItem 
                    key={partData.conv_id}
                    partData={partData}
                />
            ))
    }, [convData])
    
    const loadingItems = useMemo(() => {
        const prevConvDataLength = Number(localStorage.getItem(
            import.meta.env.VITE_LOCALSTORAGE_CONVDATA_LENGTH
        ))

        return Array(prevConvDataLength > 5 ? prevConvDataLength : 5).fill(1).map((_, index) => (
            <ConvItemSkeleton key={index}/>
        ))
    }, [])

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
                loadingItems
            ) : (
                convItems   
            )}
        </List>
    )
})

export default Conversations