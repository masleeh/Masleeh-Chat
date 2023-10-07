import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface IAuthFormWrapperProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    iconColor?: string;
}

const AuthFormWrapper = ({
    title,
    children,
    icon = <AccountCircleIcon fontSize='large'/>,
    iconColor = 'primary.light'
}:IAuthFormWrapperProps) => {
    return (
        <Box 
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: '100%',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: iconColor, width: 45, height: 45 }}>
                {icon}
            </Avatar>
            <Typography component="h3" variant="h5">
                {title}
            </Typography>
            {children}
        </Box>
    )
}

export default AuthFormWrapper