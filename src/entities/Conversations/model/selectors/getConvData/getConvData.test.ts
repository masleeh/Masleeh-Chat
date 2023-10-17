import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/store";
import { initialState } from "../../slice/conversations.slice";
import { getConvData } from "./getConvData";

const filledState: DeepPartial<IStateSchema> = {
    coversation: {
        convData: [
            {
                conv_id: '123456123123',
                title: undefined,
                last_message: 'ahahahaha',
                type: 'private',
                users: [
                    {
                        username: 'masleeh',
                        user_id: '123',
                        profile_pic: undefined
                    },
                    {
                        username: 'katya',
                        user_id: '1234',
                        profile_pic: undefined
                    },
                ]
            },
            {
                conv_id: '12345612312321312',
                title: undefined,
                type: 'private',
                last_message: undefined,
                users: [
                    {
                        username: 'masleeh',
                        user_id: '123',
                        profile_pic: undefined
                    },
                    {
                        username: 'vitya',
                        user_id: '12345',
                        profile_pic: undefined
                    },
                ]
            },
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