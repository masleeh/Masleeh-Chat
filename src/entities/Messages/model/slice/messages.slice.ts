import { createSlice } from '@reduxjs/toolkit'
import { IMessagesSchema } from '../types/messages.state'

const initialState: IMessagesSchema = {
    isLoading: false,
    error: '',
    messages: []
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        clearErrorMessage: (state) => {
            state.error = ''
        }
    },
})

export const { actions: messagesActions } = messagesSlice
export const { reducer: messagesReducer } = messagesSlice