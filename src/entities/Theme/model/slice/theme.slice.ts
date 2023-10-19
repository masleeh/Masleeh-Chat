import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IThemeSchema } from '../types/theme.state'
import { ThemeOptions } from "@mui/material";

const initialState: IThemeSchema = {}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeOptions>) => {
            state = Object.assign(state, { theme: action.payload })
        }
    },
})

export const { actions: themeActions } = themeSlice
export const { reducer: themeReducer } = themeSlice