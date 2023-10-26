import { Container, Stack } from "@mui/material"
import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "widgets/common/Navbar"
import { UserConversations } from "widgets/conv/UserConversations"
import { IndexAlert } from "widgets/messages/IndexAlert"


const ConvPage = () => {
    const location = useLocation()

    return (
        <React.Fragment>
            <Navbar />

            <Container maxWidth="lg">
                <Stack direction="row" flexGrow={1} sx={{ mt: 2 }} spacing={2} alignItems="start">

                    <UserConversations />

                    {location.pathname === '/conv' ? (
                        <IndexAlert />
                    ) : (
                        <Outlet />
                    )}
                </Stack>
            </Container>
        </React.Fragment>
    )
}

export default ConvPage