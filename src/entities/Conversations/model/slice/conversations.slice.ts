import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ConvItemsType, IConvSchema } from "../types/conversations.state";
import getConvsThunk from "entities/Conversations/api/getConvsThunk/getConvsThunk";

export const initialState: IConvSchema = {
    convData: [],
    isLoading: false,
    error: ''
}

export const convSlice = createSlice({
    name: 'conv',
    initialState,
    reducers: {
        clearErrorMessage: (state) => {
            state.error = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getConvsThunk.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(getConvsThunk.fulfilled, (state, action: PayloadAction<ConvItemsType>) => {
                state.isLoading = false
                state.convData = action.payload
            })
            .addCase(getConvsThunk.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false
                state.error = action.payload ?? ''
            });
    }
})

export const { actions: convActions } = convSlice
export const { reducer: convReducer } = convSlice