import testWrapper from "shared/lib/testWrapper/testWrapper"
import { screen } from '@testing-library/react'
import Navbar from "./Navbar"

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
})