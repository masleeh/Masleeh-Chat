import { Stack } from '@mui/material';
import { SearchUser } from 'features/index/SearchUser';

const UserConversations = () => {

    return (
        <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 400 }}>
            <SearchUser />
            <div>Conversations</div> 
        </Stack>
    )
}

export default UserConversations