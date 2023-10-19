import {screen} from '@testing-library/react'
import testWrapper from "shared/lib/testWrapper/testWrapper"
import { Navbar } from '../..'
import { DeepPartial } from '@reduxjs/toolkit'
import { IStateSchema, createReduxStore } from 'app/providers/store'
import { Themes } from 'entities/Theme'
import userEvent from '@testing-library/user-event'

const state: DeepPartial<IStateSchema> = {
    theme: {
        theme: {
            theme: {
                palette: {
                    mode: 'light',
                }
            },
            title: Themes.default
        }
    }
}

describe('useToggleThemeMode component', () => {
    it('Check useToggleThemeMode', async () => {
        const store = createReduxStore(state as IStateSchema)
        testWrapper(<Navbar />, {store: store})
        const ToggleThemeModeButton = screen.getByLabelText('toggle theme mode button')

        await userEvent.click(ToggleThemeModeButton)
        let newState = store.getState()
        
        expect(newState.theme).toEqual({
            theme: {
                palette: {
                    mode: 'dark',
                }
            },
            title: Themes.default
        })
        
        await userEvent.click(ToggleThemeModeButton)
        newState = store.getState()

        expect(newState.theme).toEqual({
            theme: {
                palette: {
                    mode: 'light',
                }
            },
            title: Themes.default
        })
    })
})