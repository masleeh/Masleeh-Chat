// import {screen} from '@testing-library/react'
import { DialogTitle } from "@mui/material"
import testWrapper from "shared/lib/testWrapper/testWrapper"

describe('DialogTitle component', () => {
    it('Check DialogTitle', () => {
        const component = testWrapper(<DialogTitle />)
        expect(component).toMatchSnapshot()
    })
})