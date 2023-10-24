import testWrapper from "shared/lib/testWrapper/testWrapper"
import ConvItem from './ConvItem'

const partData = {
    conv_id: '123456123123',
    title: undefined,
    last_message: 'ahahahaha',
    type: 'private',
    updatedAt: '2023-10-16T15:41:23.000Z',
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
    ],
    message: [
        {
            mes_id: '1234567890',
            user_id: 'asdfg',
            conv_id: '1234567890',
            body: 'Privetiki',
            status: 'unread',
            type: 'text'
        }
    ]
}

describe('ConvItem component', () => {
    it('Check ConvItem', () => {
        const component = testWrapper(<ConvItem partData={partData}/>)
        expect(component).toMatchSnapshot()
    })
})