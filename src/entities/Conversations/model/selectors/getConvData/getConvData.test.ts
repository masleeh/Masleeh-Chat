import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/store";
import { initialState } from "../../slice/conversations.slice";
import { getConvData } from "./getConvData";

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


describe('getConvData', () => {
    it('Checking convData', () => {
        expect(getConvData(filledState as IStateSchema)).toEqual(filledState.coversation?.convData)
    })

    it('Checking empty convData', () => {
        expect(getConvData(emptyState as IStateSchema)).toEqual(initialState.convData)
    })
})