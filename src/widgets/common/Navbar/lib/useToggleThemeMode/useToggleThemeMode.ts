import { useTheme } from "@mui/material"
import { AppThemes, ThemeMode, getThemeTitle, themeActions } from "entities/Theme"
import { useAppDispatch } from "shared/hooks/Redux/useAppDispatch"
import { useAppSelector } from "shared/hooks/Redux/useAppSelector"

const useToggleThemeMode = () => {
    const dispatch = useAppDispatch()

    const { palette: {
        mode
    }} = useTheme()

    const themeTitle = useAppSelector(getThemeTitle)

    const toggleAppThemeMode = () => {
        localStorage.setItem(import.meta.env.VITE_LOCALSTORAGE_MODE, 
            mode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light)
        dispatch(themeActions.setTheme({
            title: themeTitle,
            theme: AppThemes[themeTitle][mode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light]
        }))
    }

    return {
        toggleAppThemeMode
    }
}

export default useToggleThemeMode