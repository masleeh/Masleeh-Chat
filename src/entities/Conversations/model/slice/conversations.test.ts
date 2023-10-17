import { DeepPartial } from '@reduxjs/toolkit'
import { IConvSchema } from '../types/conversations.state'
import { convActions, convReducer } from './conversations.slice'

describe('conversations', () => {
    it('Check clearErrorMessage', () => {
        const state: DeepPartial<IConvSchema> = {
            convData: [],
            isLoading: false,
            error: 'Unknown error'
        }
        expect(convReducer(state as IConvSchema, convActions.clearErrorMessage())).toEqual({
            ...state, error: ''
        })
    })
})