import { DeepPartial } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/store/config/StateSchema'
import { describe, expect, test} from 'vitest'
import { getUserId } from './getUserId'

const state: DeepPartial<IStateSchema> = {
    user: {
        userData: {
            user_id: "123456asdfg",
            username: "masleeh",
            profile_pic: ''
        }
    }
}

describe('getUserId', () => {
    test('', () => {
        expect(getUserId(state as IStateSchema)).toEqual("123456asdfg")
    })
})