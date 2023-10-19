import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/store";
import { themeActions, themeReducer } from "./theme.slice";
import { IThemeSchema } from "../types/theme.state";
import { ThemeOptions } from "@mui/material";

const state: DeepPartial<IStateSchema> = {
    theme: {
        theme: {
            palette: {
                mode: 'light',
            }
        }
    }
}

describe('theme slice', () => {
    it('Check theme', () => {
        const newTheme: ThemeOptions = {
            palette: {
                mode: 'dark',
            }
        }
        expect(themeReducer({} as IThemeSchema, themeActions.setTheme(newTheme))).toEqual({theme: newTheme})
        expect(themeReducer(state as IThemeSchema, themeActions.setTheme(newTheme))).toEqual({theme: newTheme})
    })
})