import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/store";
import { themeActions, themeReducer } from "./theme.slice";
import { IThemeSchema, setThemePayload } from "../types/theme.state";
import { Themes } from "../themes/themes";

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

describe('theme slice', () => {
    it('Check theme', () => {
        const newTheme: setThemePayload = {
            theme: {
                palette: {
                    mode: 'dark',
                }
            },
            title: Themes.default
        }
        expect(themeReducer({} as IThemeSchema, themeActions.setTheme(newTheme))).toEqual(newTheme)
        expect(themeReducer(state as IThemeSchema, themeActions.setTheme(newTheme))).toEqual(newTheme)
    })
})