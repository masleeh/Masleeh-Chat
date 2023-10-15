import { Stack } from '@mui/material';
import { Conversations } from 'features/conv/Conversations';
import { SearchUser } from 'features/conv/SearchUser';

const UserConversations = () => {

    return (
        <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: 400 }}>
            <SearchUser />
            <Conversations /> 
        </Stack>
    )
}

export default UserConversations