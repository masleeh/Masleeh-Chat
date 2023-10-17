import testWrapper from "shared/lib/testWrapper/testWrapper"
import ConvItemSkeleton from './ConvItemSkeleton'

describe('ConvItemSkeleton component', () => {
    it('Check ConvItemSkeleton', () => {
        const component = testWrapper(<ConvItemSkeleton />)
        expect(component).toMatchSnapshot()
    })
})