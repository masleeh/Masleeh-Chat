import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import AccountMenu from "../AccountMenu/AccountMenu"
import { useSelector } from "react-redux"
import { getUserId } from "entities/User/model/selectors/getUserId/getUserId"
import useNavMenuButtons from "../../lib/useNavMenuButton/useNavMenuButtons"
import ToggleThemeMode from "../ToggleThemeMode/ToggleThemeMode"

const Navbar = () => {
    const userId = useSelector(getUserId)
    const {
        goToConversations
    } = useNavMenuButtons()
    
    return (
        <Container maxWidth="lg">
            <AppBar position="static" sx={{
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15
            }}>
                <Toolbar>
                    <Typography 
                        variant="h5" 
                        component="div" 
                        sx={{ flexGrow: 1, cursor: 'pointer' }}
                        onClick={goToConversations}
                    >
                        Masleeh Chat
                    </Typography>

                    <ToggleThemeMode />
                    { userId && <AccountMenu sx={{ml: 2}}/>}
                            
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default Navbar