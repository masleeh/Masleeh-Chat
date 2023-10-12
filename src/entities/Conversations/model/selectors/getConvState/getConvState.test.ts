import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/store";
import { getConvState } from "./getConvState";
import { initialState } from "../../slice/conversations.slice";

const filledState: DeepPartial<IStateSchema> = {
    coversation: {
        convData: [
            {
                conv_id: '123456',
                username: 'masleeh',
                profile_pic: undefined,
                unread_count: 0,
            }
        ],
        error: '',
        isLoading: false
    }
}

const emptyState: DeepPartial<IStateSchema> = {}


describe('getConvState', () => {
    it('Checking convState', () => {
        expect(getConvState(filledState as IStateSchema)).toEqual(filledState.coversation)
    })

    it('', () => {
        expect(getConvState(emptyState as IStateSchema)).toEqual(initialState)
    })
})