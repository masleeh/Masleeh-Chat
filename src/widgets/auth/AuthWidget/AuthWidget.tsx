import { Container, Paper } from '@mui/material';
import { LoginForm } from 'features/auth/LoginForm';
import { RegisterForm } from 'features/auth/RegisterForm';
import { useState } from 'react';


const AuthWidget = () => {
    const [page, setPage] = useState(0)

    const navToRegister = () => setPage(1)
    const navToLogin = () => setPage(0)

    return (
        <Container maxWidth="xs" sx={{mt: 15}}>
            <Paper sx={{p: 4, borderRadius: 5 }} elevation={16}>
                {page === 0 && <LoginForm customAction={navToRegister}/>}
                {page === 1 && <RegisterForm customAction={navToLogin}/>}
            </Paper>
        </Container>
    )
}

export default AuthWidget