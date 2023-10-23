import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/store";
import { getTheme } from "./getTheme";

const state: DeepPartial<IStateSchema> = {
    theme: {
        theme: {
            palette: {
                mode: 'light',
            }
        }
    }
}

describe('getTheme', () => {
    it('Check getTheme', () => {
        expect(getTheme(state as IStateSchema)).toEqual(state.theme!.theme)
    })

    it('Check with empty value', () => {
        expect(getTheme({} as IStateSchema)).toEqual(state.theme?.theme)
    })
})
