import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/store";
import { getConvState } from "./getConvState";
import { initialState } from "../../slice/conversations.slice";

const filledState: DeepPartial<IStateSchema> = {
    coversation: {
        convData: [
            {
                conv_id: '123456123123',
                title: undefined,
                last_message: 'ahahahaha',
                type: 'private',
                updatedAt: '2023-10-16T15:41:23.000Z',
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
                ],
                message: [
                    {
                        mes_id: '1234234234',
                        user_id: '123',
                        conv_id: '123456123123',
                        body: 'Privetiki',
                        status: 'unread',
                        type: 'text'
                    }
                ]
            },
            {
                conv_id: '12345612312321312',
                title: undefined,
                type: 'private',
                last_message: undefined,
                updatedAt: '2023-10-16T15:41:23.000Z',
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
                ],
                message: [
                    {
                        mes_id: 'asdfasdascxzzz',
                        user_id: '12345',
                        conv_id: '12345612312321312',
                        body: 'Privetiki',
                        status: 'unread',
                        type: 'text'
                    }
                ]
            },
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