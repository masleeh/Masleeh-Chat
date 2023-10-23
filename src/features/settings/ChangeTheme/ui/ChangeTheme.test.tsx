import { DeepPartial } from '@reduxjs/toolkit'
import {screen} from '@testing-library/react'
import { IStateSchema, createReduxStore } from 'app/providers/store'
import { AppThemes, ThemeMode, Themes } from 'entities/Theme'
import testWrapper from "shared/lib/testWrapper/testWrapper"
import { ChangeTheme } from '..'
import userEvent from '@testing-library/user-event'

const state: DeepPartial<IStateSchema> = {
    theme: {
        title: Themes.default,
        theme: AppThemes[Themes.default][ThemeMode.light]
    }
}

describe('ChangeTheme component', () => {
    it('Check ChangeTheme snapshot', () => {
        const component = testWrapper(<ChangeTheme />)
        expect(component).toMatchSnapshot()
    })

    it('Check changing theme', async () => {
        const store = createReduxStore(state as IStateSchema)
        testWrapper(<ChangeTheme />, {store: store})
        const themeBtn = screen.getByLabelText("theme btn Violet")
        userEvent.click(themeBtn)

        setTimeout(() => {
            const newState = store.getState()
            expect(newState.theme.title).toBe(Themes.violet)
            expect(newState.theme.theme).toEqual(AppThemes[Themes.violet][ThemeMode.light])
        }, 1000)
    })

})