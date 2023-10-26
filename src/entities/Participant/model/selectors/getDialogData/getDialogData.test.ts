import { DeepPartial } from "@reduxjs/toolkit"
import { IStateSchema } from "app/providers/store"
import { getDialogData } from "./getDialogData"

const emptyState: DeepPartial<IStateSchema> = {}
const state: DeepPartial<IStateSchema> = {
    participants: {
        isLoading: false,
        error: '',
        partData: {
            type: 'private',
            users: [
                {
                    user_id: '12345',
                    username: 'masleeh',
                    profile_pic: undefined
                },
                {
                    user_id: '123456',
                    username: 'katya',
                    profile_pic: undefined
                },
            ],
        },
        _inited: true
    }
}

describe('getDialogData', () => {
    it('Check getDialogData', () => {
        expect(getDialogData(state as IStateSchema)).toEqual(state.participants?.partData)
    })

    it('Check with empty state', () => {
        expect(getDialogData(emptyState as IStateSchema)).toEqual({
            type: 'private',
            users: [],
        })
    })
})