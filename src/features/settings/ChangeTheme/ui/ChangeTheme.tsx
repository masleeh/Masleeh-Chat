import { Avatar, SimplePaletteColorOptions, Stack, Tooltip } from "@mui/material"
import { AppThemes, ThemeMode, Themes, getThemeTitle } from "entities/Theme"
import { useMemo } from "react"
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useAppSelector } from "shared/hooks/Redux/useAppSelector";
import useChangeTheme from "../lib/useChangeTheme/useChangeTheme";


const ChangeTheme = () => {
    const theme = useAppSelector(getThemeTitle)

    const {
        changeTheme
    } = useChangeTheme()

    const renderThemes = useMemo(() => {

        return Object.entries(AppThemes).map(([themeKey, themeValue]) => {
            const themeColor = (themeValue[ThemeMode.light]
                .palette?.primary as SimplePaletteColorOptions)?.main ?? "#1976d2"

            return (
                <Tooltip 
                    key={themeKey}
                    title={`${themeKey.slice(0, 1).toUpperCase()}${themeKey.slice(1)}`} placement="top"
                >
                    <Avatar 
                        aria-label={`theme btn ${themeKey}`}
                        variant="square"
                        sx={{
                            bgcolor: themeColor,
                            cursor: 'pointer',
                            boxShadow: theme === themeKey ? 
                                `0px 0px 2px 3px ${themeColor}` : 0
                        }}
                        onClick={() => changeTheme(themeKey as Themes)}
                    >
                        <ColorLensIcon />
                    </Avatar>
                </Tooltip>
            ) 
        })
    }, [theme, changeTheme])

    return (
        <Stack direction="row" spacing={1} flexWrap="wrap">
            {renderThemes}
        </Stack>
    )
}

export default ChangeTheme