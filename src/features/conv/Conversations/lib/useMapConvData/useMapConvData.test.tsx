import { renderHook } from "@testing-library/react-hooks"
import useMapConvData from "./useMapConvData"
import { TConvItem } from "entities/Conversations"

vi.mock('react-redux', () => ({
    ...vi.importActual('react-redux'),
    useSelector: () => 'asdfg'
}))
vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom'),
    useParams: () => ({conv_id: '1234567890'})
}))

const fullData: TConvItem = {
    conv_id: '1234567890',
    title: 'Ohoo',
    type: 'private',
    last_message: 'hahaha',
    updatedAt: '2023-10-16T15:41:23.000Z',
    users: [
        {
            username: 'masleeh',
            user_id: 'asdfg',
            profile_pic: undefined
        },
        {
            username: 'katya',
            user_id: 'asdfggg',
            profile_pic: undefined
        },
    ]
}

const fullDataResult = {
    pic: '',
    last_message: 'hahaha',
    conv_id: '1234567890',
    title: 'katya',
    isSelected: true,
    updateTime: '16.10.2023'
}

describe('useMapConvData', () => {
    it('Check useMapConvData with empty data', async () => {
        const {
            result
        } = renderHook(() => useMapConvData(fullData))
        
        expect(result.current).toEqual(fullDataResult)
    })
})