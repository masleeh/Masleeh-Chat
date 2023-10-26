/* eslint-disable max-lines */
import { ThemeOptions } from "@mui/material";

export enum Themes {
    default = 'default',
    violet = 'violet',
    feldgrau = 'feldgrau',
    mindaro = 'mindaro',
    lightred = 'lightred'
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
    },
    [Themes.violet]: {
        [ThemeMode.light]: {
            palette: {
                mode: 'light',
                primary: {
                    main: '#C86FC9',
                },
                secondary: {
                    main: '#8E518D',
                },
                warning: {
                    main: '#8E518D',
                },
                info: {
                    main: '#8E518D',
                },
                success: {
                    main: '#8E518D',
                },
                error: {
                    main: '#8E518D',
                },
            },
        },
        [ThemeMode.dark]: {
            palette: {
                mode: 'dark',
                primary: {
                    main: '#C86FC9',
                },
                secondary: {
                    main: '#8E518D',
                },
                warning: {
                    main: '#8E518D',
                },
                info: {
                    main: '#8E518D',
                },
                success: {
                    main: '#8E518D',
                },
                error: {
                    main: '#8E518D',
                },
            },
        }
    },
    [Themes.feldgrau]: {
        [ThemeMode.light]: {
            palette: {
                mode: 'light',
                primary: {
                    main: '#466362',
                },
                secondary: {
                    main: '#8896AB',
                },
                warning: {
                    main: '#7E6551',
                },
                info: {
                    main: '#7E6551',
                },
                success: {
                    main: '#7E6551',
                },
                error: {
                    main: '#7E6551',
                },
            }
        },
        [ThemeMode.dark]: {
            palette: {
                mode: 'dark',
                primary: {
                    main: '#466362',
                },
                secondary: {
                    main: '#8896AB',
                },
                warning: {
                    main: '#7E6551',
                },
                info: {
                    main: '#7E6551',
                },
                success: {
                    main: '#7E6551',
                },
                error: {
                    main: '#7E6551',
                },
            }
        }
    },
    [Themes.mindaro]: {
        [ThemeMode.light]: {
            palette: {
                mode: 'light',
                primary: {
                    main: '#C8D96F',
                },
                secondary: {
                    main: '#9BA7C0',
                },
                warning: {
                    main: '#5C573E',
                },
                info: {
                    main: '#5C573E',
                },
                success: {
                    main: '#5C573E',
                },
                error: {
                    main: '#5C573E',
                },
            }
        },
        [ThemeMode.dark]: {
            palette: {
                mode: 'dark',
                primary: {
                    main: '#C8D96F',
                },
                secondary: {
                    main: '#9BA7C0',
                },
                warning: {
                    main: '#5C573E',
                },
                info: {
                    main: '#5C573E',
                },
                success: {
                    main: '#5C573E',
                },
                error: {
                    main: '#5C573E',
                },
            }
        }
    },
    [Themes.lightred]: {
        [ThemeMode.light]: {
            palette: {
                mode: 'light',
                primary: {
                    main: '#FF6B6B',
                },
                secondary: {
                    main: '#FFE66D',
                },
                warning: {
                    main: '#4ECDC4',
                },
                info: {
                    main: '#4ECDC4',
                },
                success: {
                    main: '#4ECDC4',
                },
                error: {
                    main: '#4ECDC4',
                },
            },
        },
        [ThemeMode.dark]: {
            palette: {
                mode: 'dark',
                primary: {
                    main: '#EC0B43',
                },
                secondary: {
                    main: '#FFE66D',
                },
                warning: {
                    main: '#4ECDC4',
                },
                info: {
                    main: '#4ECDC4',
                },
                success: {
                    main: '#4ECDC4',
                },
                error: {
                    main: '#4ECDC4',
                },
            }
        }
    },
}