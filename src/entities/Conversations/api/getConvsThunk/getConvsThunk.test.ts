import { describe, expect } from 'vitest'
import getConvsThunk from './getConvsThunk'
import { Dispatch } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/store'
import $api from 'shared/lib/axiosApi/axiosApi'

const mockedAxios = vi.spyOn($api, 'get')

const errorText: string = `[
  {
    "code": "invalid_type",
    "expected": "number",
    "received": "undefined",
    "path": [
      1,
      "unread_count"
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
                    username: 'masleeh',
                    profile_pic: null,
                    unread_count: 0,
                },
                {
                    conv_id: '123454123123',
                    username: 'katya',
                    profile_pic: null,
                    unread_count: 2,
                }
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
                    conv_id: '123456123123',
                    username: 'masleeh',
                    profile_pic: null,
                    unread_count: 0,
                },
                {
                    conv_id: '123454123123',
                    username: 'katya',
                    profile_pic: null
                }
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