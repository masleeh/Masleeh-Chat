import { Container } from "@mui/material"
import React from "react"
import { Navbar } from "widgets/common/Navbar"


const SettingsPage = () => {
    return (
        <React.Fragment>
            <Navbar />

            <Container maxWidth="lg" sx={{mt: 2}}>
                Settings
            </Container>
        </React.Fragment>
    )
}

export default SettingsPage