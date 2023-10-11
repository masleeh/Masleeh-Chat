import { DeepPartial } from 'react-hook-form'
import { describe, expect } from 'vitest'
import { IUserSchema } from '../types/user.state'
import { userActions, userReducer } from './user.slice'

describe('User slice', () => {
    it('Check setUserData', () => {
        const state: DeepPartial<IUserSchema> = {}
        const userData = {
            username: 'masleeh',
            profile_pic: 'localhost:5000/pics/7p3YxyvZruvN',
            user_id: 'asdfgghhjkk'
        }

        expect(userReducer(state as IUserSchema, userActions.setUserData(userData))).toEqual({userData: userData})
    })
})