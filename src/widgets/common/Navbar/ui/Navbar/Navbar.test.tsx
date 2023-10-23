import testWrapper from "shared/lib/testWrapper/testWrapper"
import { screen } from '@testing-library/react'
import Navbar from "./Navbar"
import userEvent from "@testing-library/user-event"
import $api from "shared/lib/axiosApi/axiosApi"

const filledState = {
    user: {
        userData: {
            username: 'masleeh',
            profile_pic: 'localhost:5000/pics/7p3YxyvZruvN',
            user_id: 'asdfgghhjkk'
        }
    }
}

const emptyState = {
    user: {}
}

const axiosMock = vi.spyOn($api, 'post')

describe('Navbar component', () => {
    it('Check component', () => {
        const component = testWrapper(<Navbar />)
        expect(component).toMatchSnapshot()
    })
    
    it('Check avatar with filled state', () => {
        testWrapper(<Navbar />, {initialState: filledState})
        const AccountMenu = screen.getByLabelText('icon-button with avatar')
        expect(AccountMenu).toBeInTheDocument()
        expect(AccountMenu).toBeVisible()
    })
    
    it('Check avatar with empty state', () => {
        testWrapper(<Navbar />, {initialState: emptyState})
        const AccountMenu = screen.queryByLabelText('icon-button with avatar')
        expect(AccountMenu).not.toBeInTheDocument()
    })

    it('Check does logout removes userData', async () => {
        axiosMock.mockResolvedValue(() => vi.fn())

        testWrapper(<Navbar />, { initialState: filledState })
        const AvatarBtn = screen.getByLabelText('icon-button with avatar')
        await userEvent.click(AvatarBtn)
        const AccountMenu = screen.getByLabelText('navbar-menu')
        expect(AccountMenu).toBeInTheDocument()
        expect(AccountMenu).toBeVisible()
        
        const LogOutBtn = screen.getByLabelText("logout button")
        await userEvent.click(LogOutBtn)
        expect(AccountMenu).not.toBeVisible()
        expect(AccountMenu).not.toBeInTheDocument()

        expect(AvatarBtn).not.toBeInTheDocument()
    })
})