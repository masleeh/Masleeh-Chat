import { IParticipantSchema } from "../types/participant.state"
import { participantActions, participantReducer } from "./participant.slice"

const state = {
    isLoading: false,
    error: '',
    partData: {
        type: 'private',
        users: [],
    },
    _inited: false   
}

describe('participant', () => {
    const partData = {
        users: [
            {
                username:"masleeh",
                user_id:"bSOuaNRL53x6",
                profile_pic:"http://localhost:5000/users/yrRVfhfjXFbogeEsvF0v3GU6J7QEOLlQc1yrycwd.jpg"
            },
            {
                username:"masleeh2",
                user_id:"3KNEgvrgTdeA"
            }
        ],
        type: 'private',
        title: 'ahahahaha'
    }

    it('Check setPartData', () => {
        expect(participantReducer(state as IParticipantSchema, participantActions.setPartData(partData))).toEqual({
            isLoading: false,
            error: '',
            partData: {
                type: 'private',
                users: [
                    {
                        username:"masleeh",
                        user_id:"bSOuaNRL53x6",
                        profile_pic:"http://localhost:5000/users/yrRVfhfjXFbogeEsvF0v3GU6J7QEOLlQc1yrycwd.jpg"
                    },
                    {
                        username:"masleeh2",
                        user_id:"3KNEgvrgTdeA"
                    }
                ],
                title: 'ahahahaha'
            },
            _inited: true   
        })
    })
})