import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IThemeSchema, setThemePayload } from '../types/theme.state'

const initialState: IThemeSchema = {}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<setThemePayload>) => {
            state.theme = action.payload.theme
            state.title = action.payload.title
        }
    },
})

export const { actions: themeActions } = themeSlice
export const { reducer: themeReducer } = themeSlice