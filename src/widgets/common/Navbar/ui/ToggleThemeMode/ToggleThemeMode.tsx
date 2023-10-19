import { IconButton, useTheme } from "@mui/material"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useToggleThemeMode from "../../lib/useToggleThemeMode/useToggleThemeMode";
import { useMemo } from "react";


const ToggleThemeMode = () => {
    const theme = useTheme()
    const {toggleAppThemeMode} = useToggleThemeMode()

    const toggleButton = useMemo(() => (
        <IconButton
            aria-label="toggle theme mode button"
            color="inherit"
            onClick={toggleAppThemeMode}
        >
            {theme.palette.mode === "light" ? (
                <Brightness7Icon color="inherit" />
            ) : (
                <Brightness4Icon color="inherit" />
            )}    
        </IconButton>
    ), [theme, toggleAppThemeMode])

    return toggleButton
}

export default ToggleThemeMode