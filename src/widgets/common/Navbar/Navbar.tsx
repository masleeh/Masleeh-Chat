import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import AccountMenu from "./elements/AccountMenu/AccountMenu"
import { useSelector } from "react-redux"
import { getUserId } from "entities/User/model/selectors/getUserId/getUserId"

const Navbar = () => {
    const userId = useSelector(getUserId)
    
    return (
        <Container maxWidth="lg">
            <AppBar position="static" sx={{
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15
            }}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Masleeh Chat
                    </Typography>

                    { userId && <AccountMenu />}
                            
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default Navbar