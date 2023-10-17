import testWrapper from "shared/lib/testWrapper/testWrapper"
import Conversations from './Conversations'

describe('Conversations component', () => {
    it('Check Conversations', () => {
        const component = testWrapper(<Conversations />)
        expect(component).toMatchSnapshot()
    })
})