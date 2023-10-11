import { describe, expect } from 'vitest'
import $api from 'shared/lib/axiosApi/axiosApi'
import { renderHook } from '@testing-library/react-hooks'
import useSearchUser from './useSearchUser'

const axiosMock = vi.spyOn($api, 'post')

const data = [
    {
        username: 'masleeh',
        user_id: '123',
        profile_pic: null
    },
    {
        username: 'masleeh1',
        user_id: '1234',
        profile_pic: null
    },
    {
        username: 'masleeh2',
        user_id: '12345',
        profile_pic: null
    },
]

describe('useSendRegisterData', () => {
    
    it('Check sendRegisterData', async () => {
        axiosMock.mockResolvedValue({
            data: data
        })

        const {
            result
        } = renderHook(() => useSearchUser('masleeh'))

        await result.current.searchUserByUserName()

        expect(result.current.error).toEqual('')
        expect(result.current.isSuccess).toEqual(true)
        expect(result.current.data).toEqual(data.map((item) => ({...item, profile_pic: undefined})))

        axiosMock.mockClear()
    })

    it('Check sendRegisterData with wrong data', async () => {
        axiosMock.mockResolvedValue({
            data: []
        })

        const {
            result
        } = renderHook(() => useSearchUser(''))

        await result.current.searchUserByUserName()

        expect(result.current.error).toEqual('')
        expect(result.current.isSuccess).toEqual(false)
        expect(result.current.data).toEqual([])

        axiosMock.mockClear()
    })
})