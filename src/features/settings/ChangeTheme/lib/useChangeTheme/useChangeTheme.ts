import { useTheme } from "@mui/material"
import { AppThemes, Themes, themeActions } from "entities/Theme"
import { useCallback } from "react"
import { useAppDispatch } from "shared/hooks/Redux/useAppDispatch"

const useChangeTheme = () => {
    const dispatch = useAppDispatch()
    const { palette: {
        mode
    }} = useTheme()

    const changeTheme = useCallback((theme: Themes) => {
        dispatch(themeActions.setTheme({
            title: theme,
            theme: AppThemes[theme][mode]
        }))
        localStorage.setItem(import.meta.env.VITE_LOCALSTORAGE_THEME, theme)
    }, [mode, dispatch])

    return {
        changeTheme
    }
}

export default useChangeTheme