import {screen} from '@testing-library/react'
import testWrapper from "shared/lib/testWrapper/testWrapper"
import { UpdateUserInfo } from '..'
import userEvent from '@testing-library/user-event'
import { DeepPartial } from 'react-hook-form'
import $api from 'shared/lib/axiosApi/axiosApi'
import { IStateSchema, createReduxStore } from 'app/providers/store'

const axiosMock = vi.spyOn($api, 'patch')
const state: DeepPartial<IStateSchema> = {
    user: {
        userData: {
            username: 'masleeh',
            user_id: 'fowe8vke7c;wh',
            profile_pic: 'http://localhost:5000/users/Ea3bptxnJF2-dqp6Wk8SHEZOlVkw_oyaJz4QlO6h.jpg'
        }
    }
}

const axiosResponse = {
    username: 'kunteynir',
    user_id: 'fowe8vke7c;wh',
    profile_pic: 'http://localhost:5000/users/Ea3bptxnJF2-dqp6Wk8SHEZOlVkw_oyaJz4QlO6h.jpg'
}

describe('UpdateUserInfo component', () => {
    it('Check UpdateUserInfo', async () => {
        const component = testWrapper(<UpdateUserInfo />)
        const showButton = screen.getByLabelText("s show user info dialog")
        await userEvent.click(showButton)
        expect(component).toMatchSnapshot()
    })

    it('Check full functional', async () => {
        axiosMock.mockResolvedValue(axiosResponse)
        const store = createReduxStore(state as IStateSchema)
        testWrapper(<UpdateUserInfo />, {store: store})
        const showButton = screen.getByLabelText("s show user info dialog")
        await userEvent.click(showButton)

        const usernameInput = screen.getByLabelText("s username input")
        await userEvent.type(usernameInput, 'kunteynir')

        const updateButton = screen.getByLabelText("update user info button")
        await userEvent.click(updateButton)

        setTimeout(() => {
            const newState = store.getState()
            expect(newState.user.userData).toEqual(axiosResponse)
        }, 1100)
    })

})