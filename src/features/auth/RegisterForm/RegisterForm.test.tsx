import testWrapper from "shared/lib/testWrapper/testWrapper"
import RegisterForm from "./RegisterForm"
import * as registerHook from './utils/useSendRegisterData'
import { screen } from '@testing-library/react'

const registerMock = vi.spyOn(registerHook, 'default')

describe('RegisterForm Component', () => {

    it('Check changes of the component', () => {
        const component = testWrapper(<RegisterForm customAction={vi.fn()}/>)
        expect(component).toMatchSnapshot()
    })
    
    it('Check error alert existing', () => {
        registerMock.mockReturnValue({
            sendRegisterData: vi.fn(),
            isLoading: false,
            error: 'Unknown error happened',
            clearError: vi.fn(),
            isSuccess: false
        })

        testWrapper(<RegisterForm customAction={vi.fn()}/>)

        const errorAlert = screen.getByLabelText(/error-alert/i)
        expect(errorAlert).toHaveStyle("visibility: visible")
        expect(errorAlert).toHaveTextContent('Unknown error happened')
    })
})