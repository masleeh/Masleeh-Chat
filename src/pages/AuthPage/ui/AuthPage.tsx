import React from "react"
import { AuthWidget } from "widgets/auth/AuthWidget"
import { Navbar } from "widgets/common/Navbar"

const AuthPage = () => {
    return (
        <React.Fragment>
            <Navbar />
            <AuthWidget />
        </React.Fragment>
    )
}

export default AuthPage