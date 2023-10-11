import testWrapper from 'shared/lib/testWrapper/testWrapper'
import { describe, expect } from 'vitest'
import { SearchUser } from '.'

describe('SearchUser', () => {
    it('Test component snapshot', () => {
        const component = testWrapper(<SearchUser />)

        expect(component).toMatchSnapshot()
    })
})