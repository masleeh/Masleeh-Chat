import testWrapper from 'shared/lib/testWrapper/testWrapper'
import * as LoginHook from './utils/useSendLoginData'
import { LoginForm } from '.'
import { screen } from '@testing-library/react'

const loginMock = vi.spyOn(LoginHook, 'default')

describe('LoginForm Component', () => {
    
    it('Check snapshot', () => {
        const component = testWrapper(<LoginForm customAction={vi.fn()}/>)
        expect(component).toMatchSnapshot()
    })

    it('Check error', () => {
        loginMock.mockReturnValue({
            sendLoginData: vi.fn(),
            isLoading: false,
            error: 'Unknown error happened',
            clearError: vi.fn(),
            isSuccess: false
        })

        testWrapper(<LoginForm customAction={vi.fn()}/>)

        const errorAlert = screen.getByLabelText(/error-alert/i)
        expect(errorAlert).toHaveStyle("visibility: visible")
        expect(errorAlert).toHaveTextContent('Unknown error happened')
    })
})