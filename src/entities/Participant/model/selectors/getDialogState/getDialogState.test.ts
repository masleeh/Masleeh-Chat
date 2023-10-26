import { DeepPartial } from "@reduxjs/toolkit"
import { IStateSchema } from "app/providers/store"
import { getDialogState } from "./getDialogState"

vi.mock("@reduxjs/toolkit", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const actual: any = await vi.importActual("@reduxjs/toolkit")
    return ({
        ...actual,
        createSelector: () => vi.fn()
    })
})

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

describe('getDialogState', () => {
    it('Check getDialogState', () => {
        expect(getDialogState(state as IStateSchema)).toEqual(state.participants)
    })

    it('Check with empty state', () => {
        expect(getDialogState(emptyState as IStateSchema)).toEqual({
            isLoading: false,
            error: '',
            partData: {
                type: 'private',
                users: [],
            },
            _inited: false
        })
    })
})