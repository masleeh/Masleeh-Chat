import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IMessage, IMessagesSchema } from '../types/messages.state'
import getMessagesThunk from 'entities/Messages/api/getMessagesThunk/getMessagesThunk'

export const initialState: IMessagesSchema = {
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
    extraReducers: (builder) => {
        builder
            .addCase(getMessagesThunk.pending, (state) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(getMessagesThunk.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.error = action.payload ?? ''
                state.isLoading = false
            })
            .addCase(getMessagesThunk.fulfilled, (state, action: PayloadAction<IMessage[]>) => {
                state.isLoading = false
                state.messages = action.payload
            })
    }
})

export const { actions: messagesActions } = messagesSlice
export const { reducer: messagesReducer } = messagesSlice