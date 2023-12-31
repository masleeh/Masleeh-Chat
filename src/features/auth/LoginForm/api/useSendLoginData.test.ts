import { describe, expect } from 'vitest'
import useSendLoginData from './useSendLoginData'
import $api from 'shared/lib/axiosApi/axiosApi'
import { renderHook } from '@testing-library/react-hooks'

const axiosMock = vi.spyOn($api, 'post')

vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useNavigate: () => vi.fn()
}))
vi.mock('shared/hooks/Redux/useAppDispatch', () => ({
    useAppDispatch: () => vi.fn()
}))

const userData = {
    username: 'masleeh',
    profile_pic: null,
    user_id: 'asdfgghhjkk'
}

const validationError = `[
  {
    "code": "invalid_type",
    "expected": "string",
    "received": "undefined",
    "path": [
      "access_token"
    ],
    "message": "Required"
  }
]`

describe('useSendLoginData', () => {
    
    it('Check sendLoginData', async () => {
        axiosMock.mockResolvedValue({
            data: {
                access_token: 'asdlkjca,sl98a0sizaoxia209cl109x;120pas.paxpaz;',
                userData: {...userData}
            }
        })

        const {
            result
        } = renderHook(() => useSendLoginData())

        await result.current.sendLoginData({
            username: 'masleeh', password: 'password', confirm: 'password'
        })

        expect(result.current.error).toEqual('')
        expect(result.current.isSuccess).toEqual(true)

        axiosMock.mockClear()
    })

    it('Check sendLoginData with wrong data', async () => {
        axiosMock.mockResolvedValue({
            data: {
                userData: {...userData}
            }
        })

        const {
            result
        } = renderHook(() => useSendLoginData())

        await result.current.sendLoginData({
            username: 'masleeh', password: 'password', confirm: 'password'
        })

        expect(result.current.error).toContain(validationError)
        expect(result.current.isSuccess).toEqual(false)
    })
})