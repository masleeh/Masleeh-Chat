import { DeepPartial } from '@reduxjs/toolkit'
import {screen} from '@testing-library/react'
import { IStateSchema, createReduxStore } from 'app/providers/store'
import $api from 'shared/lib/axiosApi/axiosApi'
import testWrapper from "shared/lib/testWrapper/testWrapper"
import { UploadProfilePic } from '..'
import userEvent from '@testing-library/user-event'

const axiosMock = vi.spyOn($api, 'post')
const state: DeepPartial<IStateSchema> = {
    user: {
        userData: {
            username: 'masleeh',
            user_id: 'fowe8vke7c;wh',
            profile_pic: 'http://localhost:5000/users/Ea3bptxnJF2-dqp6Wk8SHEZOlVkw_oyaJz4QlO6h.jpg'
        }
    }
}

const values = ['masleeh']
const str = JSON.stringify(values);
const blob = new Blob([str]);
const file = new File([blob], 'values.json', {
    type: 'application/JSON',
});
File.prototype.text = vi.fn().mockResolvedValueOnce(str)

describe('UploadProfilePic component', () => {
    it('Check UploadProfilePic', () => {
        const component = testWrapper(<UploadProfilePic />)
        expect(component).toMatchSnapshot()
    })

    it('Check functional', async () => {
        axiosMock.mockResolvedValue({
            profile_pic: 'http://localhost:5000/static/j437rUnzlSQucxMl2xT1dVU05BRP2IOsBU1IAROs.jpg'
        })

        const store = createReduxStore(state as IStateSchema)
        testWrapper(<UploadProfilePic />, {store: store})

        const input = screen.getByLabelText('upload profile pic input')
        await userEvent.upload(input, file)

        setTimeout(() => {
            const newState = store.getState()
            expect(newState.user.userData?.profile_pic)
                .toEqual('http://localhost:5000/static/j437rUnzlSQucxMl2xT1dVU05BRP2IOsBU1IAROs.jpg')
        }, 1500)
    })

})