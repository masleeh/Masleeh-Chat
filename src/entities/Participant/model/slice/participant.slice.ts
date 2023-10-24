import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IPartData, IParticipantSchema } from '../types/participant.state'

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
})

export const { actions: participantActions } = participantSlice
export const { reducer: participantReducer } = participantSlice