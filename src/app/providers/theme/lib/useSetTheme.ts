import { AppThemes, Themes, themeActions } from "entities/Theme"
import { useCallback } from "react"
import { useAppDispatch } from "shared/hooks/Redux/useAppDispatch"
import { ThemeProviderSchema } from "../model/types/ThemeProvider.types"

const useSetTheme = () => {
    const dispatch = useAppDispatch() 

    const setTheme = useCallback(() => {
        const themeMode = localStorage.getItem(import.meta.env.VITE_LOCALSTORAGE_MODE)
        const themeTitle = localStorage.getItem(import.meta.env.VITE_LOCALSTORAGE_THEME) ?? Themes.default

        const checkData = ThemeProviderSchema.safeParse({
            themeMode, themeTitle
        })

        console.log(checkData)

        if (checkData.success) {
            dispatch(themeActions.setTheme({
                title: checkData.data.themeTitle,
                theme: AppThemes[checkData.data.themeTitle][checkData.data.themeMode]
            }))
        }
    }, [dispatch])


    return {
        setTheme
    }
}

export default useSetTheme