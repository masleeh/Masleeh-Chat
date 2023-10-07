import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser, IUserSchema } from '../types/user.state'

const initialState: IUserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUser>) => {
            state.userData = action.payload
        }
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice