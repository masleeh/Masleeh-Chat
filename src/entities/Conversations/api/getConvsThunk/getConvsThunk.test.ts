import { describe, expect } from 'vitest'
import getConvsThunk from './getConvsThunk'
import { Dispatch } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/store'
import $api from 'shared/lib/axiosApi/axiosApi'

const mockedAxios = vi.spyOn($api, 'get')

const errorText: string = `[
  {
    "code": "invalid_type",
    "expected": "string",
    "received": "undefined",
    "path": [
      0,
      "conv_id"
    ],
    "message": "Required"
  }
]`

describe('getConvsThunk', () => {
    let dispatch: Dispatch
    let getState: () => IStateSchema

    beforeEach(() => {
        dispatch = vi.fn()
        getState = vi.fn()
    })

    it('getConvThunk check', async () => {
        mockedAxios.mockResolvedValue({
            data: [
                {
                    conv_id: '123456123123',
                    title: undefined,
                    last_message: 'ahahahaha',
                    type: 'private',
                    users: [
                        {
                            username: 'masleeh',
                            user_id: '123',
                            profile_pic: undefined
                        },
                        {
                            username: 'katya',
                            user_id: '1234',
                            profile_pic: undefined
                        },
                    ]
                },
                {
                    conv_id: '12345612312321312',
                    title: undefined,
                    type: 'private',
                    last_message: undefined,
                    users: [
                        {
                            username: 'masleeh',
                            user_id: '123',
                            profile_pic: undefined
                        },
                        {
                            username: 'vitya',
                            user_id: '12345',
                            profile_pic: undefined
                        },
                    ]
                },
            ]
        })

        const action = getConvsThunk('12345')
        const result = await action(dispatch, getState, undefined)
        expect(mockedAxios).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    it('getConvThunk check', async () => {
        

        mockedAxios.mockResolvedValue({
            data: [
                {
                    // conv_id: '12345612312321312',
                    title: undefined,
                    profile_pic: null,
                    type: 'private',
                    users: [
                        {
                            username: 'masleeh',
                            user_id: '123',
                            profile_pic: undefined
                        },
                        {
                            username: 'vitya',
                            user_id: '12345',
                            profile_pic: undefined
                        },
                    ]
                },
            ]
        })

        const action = getConvsThunk('12345')
        const result = await action(dispatch, getState, undefined)
        console.log(result.payload)
        expect(mockedAxios).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect((result.payload as string)).toContain(errorText)
    })
})