import { createSlice } from "@reduxjs/toolkit";
import { IConvSchema } from "../types/conversations.state";

const initialState: IConvSchema = {
    convData: [],
    isLoading: false,
    error: ''
}

export const convSlice = createSlice({
    name: 'conv',
    initialState,
    reducers: {

    },
})

export const { actions: convActions } = convSlice
export const { reducer: convReducer } = convSlice