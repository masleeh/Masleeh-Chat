import { Container, Stack } from "@mui/material"
import React from "react"
import { Navbar } from "widgets/common/Navbar"
import { UserConversations } from "widgets/conv/UserConversations"
import { UserMessages } from "widgets/conv/UserMessages"

const ConvPage = () => {
    return (
        <React.Fragment>
            <Navbar />

            <Container maxWidth="lg">
                <Stack direction="row" flexGrow={1} sx={{ mt: 2 }} spacing={2}>

                    <UserConversations />
                    <UserMessages />
                </Stack>
            </Container>
        </React.Fragment>
    )
}

export default ConvPage