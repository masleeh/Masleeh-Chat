import { Container } from "@mui/material"
import React from "react"
import { Navbar } from "widgets/common/Navbar"
import { SettingsWidget } from "widgets/settings/SettingsWidget"


const SettingsPage = () => {
    return (
        <React.Fragment>
            <Navbar />

            <Container maxWidth="sm" sx={{mt: 2}}>
                <SettingsWidget />
            </Container>
        </React.Fragment>
    )
}

export default SettingsPage