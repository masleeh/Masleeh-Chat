import { Dispatch } from "@reduxjs/toolkit"
import { IStateSchema } from "app/providers/store"
import $api from "shared/lib/axiosApi/axiosApi"
import getDialogDataThunk from "./getDialogDataThunk"

const mockedAxios = vi.spyOn($api, 'get')

describe('getDialogDataThunk', () => {
    let dispatch: Dispatch
    let getState: () => IStateSchema

    beforeEach(() => {
        dispatch = vi.fn()
        getState = vi.fn()
    })

    it('Check getDialogDataThunk', async () => {
        mockedAxios.mockResolvedValue({
            data: {
                title: undefined,
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
            }
        })

        const action = getDialogDataThunk('conv_id')
        const result = await action(dispatch, getState, undefined)
        expect(mockedAxios).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    it('Check error getDialogDataThunk', async () => {
        mockedAxios.mockResolvedValue({
            data: {
                title: undefined,
                type: 'private',
                users: [
                    
                ]
            }
        })

        const action = getDialogDataThunk('conv_id')
        const result = await action(dispatch, getState, undefined)
        expect(mockedAxios).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
    })

})