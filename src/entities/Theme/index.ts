import { getTheme } from './model/selectors/getTheme/getTheme'
import { getThemeTitle } from './model/selectors/getThemeTitle/getThemeTitle'
import { themeActions, themeReducer } from './model/slice/theme.slice'
import { AppThemes, ThemeMode, Themes } from './model/themes/themes'
import {IThemeSchema} from './model/types/theme.state'

export type {
    IThemeSchema,
    
}

export {
    getTheme,
    getThemeTitle,
    themeActions,
    themeReducer,
    AppThemes,
    ThemeMode,
    Themes
}