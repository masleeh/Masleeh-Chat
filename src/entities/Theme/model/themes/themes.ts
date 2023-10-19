import { ThemeOptions } from "@mui/material";

export enum Themes {
    default = 'default',
}

export enum ThemeMode {
    light = 'light',
    dark = 'dark'
}

interface TAppTheme extends Record<ThemeMode, ThemeOptions> {}

export const AppThemes: Record<Themes, TAppTheme> = {
    [Themes.default]: {
        [ThemeMode.light]: {
            palette: {
                mode: 'light',
            }
        },
        [ThemeMode.dark]: {
            palette: {
                mode: 'dark',
            }
        }
    }
}