import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/store";
import { getThemeTitle } from "./getThemeTitle";
import { Themes } from "../../themes/themes";


const state: DeepPartial<IStateSchema> = {
    theme: {
        theme: {
            palette: {
                mode: 'light',
            }
        },
        title: Themes.default
    }
}

describe('getTheme', () => {
    it('Check getTheme', () => {
        expect(getThemeTitle(state as IStateSchema)).toEqual('default')
    })

    it('Check with empty value', () => {
        expect(getThemeTitle({} as IStateSchema)).toEqual('default')
    })
})