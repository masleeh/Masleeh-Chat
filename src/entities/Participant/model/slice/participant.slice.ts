import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IPartData, IParticipantSchema } from '../types/participant.state'
import { getDialogDataThunk } from 'entities/Participant'

export const initialState: IParticipantSchema = {
    isLoading: false,
    error: '',
    partData: {
        type: 'private',
        users: [],
    },
    _inited: false
}

export const participantSlice = createSlice({
    name: 'participant',
    initialState,
    reducers: {
        clearErrorMessage: (state) => {
            state.error = ''
        },
        setPartData: (state, action: PayloadAction<IPartData>) => {
            state.partData = action.payload
            state._inited = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDialogDataThunk.pending, (state) => {
                state.error = ''
                state.isLoading = true                
            })
            .addCase(getDialogDataThunk.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.error = action.payload ?? ''
                state.isLoading = false
            })
            .addCase(getDialogDataThunk.fulfilled, (state, action: PayloadAction<IPartData>) => {
                state.isLoading = false
                state.partData = action.payload
                state._inited = true
            })
    }
})

export const { actions: participantActions } = participantSlice
export const { reducer: participantReducer } = participantSlice