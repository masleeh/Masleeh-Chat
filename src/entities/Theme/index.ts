import { getTheme } from './model/selectors/getTheme/getTheme'
import { themeActions, themeReducer } from './model/slice/theme.slice'
import {IThemeSchema} from './model/types/theme.state'

export type {
    IThemeSchema,
    
}

export {
    getTheme,
    themeActions,
    themeReducer
}