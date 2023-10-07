import { DeepPartial } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/store/config/StateSchema'
import { describe, expect, test} from 'vitest'
import { getUserData, getUserState } from './getUserData'

const state: DeepPartial<IStateSchema> = {
    user: {
        userData: {
            user_id: "123456asdfg",
            username: "masleeh",
            profile_pic: ''
        }
    }
}

describe('getUserData', () => {
    test('Checking userState', () => {
        expect(getUserState(state as IStateSchema)).toEqual(state.user)
    })

    test('Checking userData', () => {
        expect(getUserData(state as IStateSchema)).toEqual(state.user?.userData)
    })
})