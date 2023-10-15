import { createAsyncThunk } from "@reduxjs/toolkit"
import $api from "shared/lib/axiosApi/axiosApi"
import {ConvItemsShema, type ConvItemsType} from '../../model/types/conversations.state'
import { isAxiosError } from "axios"

const getConvsThunk = createAsyncThunk<ConvItemsType, string, {rejectValue: string}>(
    'conversation/getConvsThunk',
    async (user_id, thunkApi) => {
        try {
            const { data } = await $api.get(`/conversations?user_id=${user_id}`)
            const checkedData = ConvItemsShema.safeParse(data)
            if (checkedData.success) {
                return checkedData.data
            } else {
                return thunkApi.rejectWithValue(checkedData.error.message)
            }
        } catch (error) {
            if (isAxiosError(error)) {
                return thunkApi.rejectWithValue(error.response?.data?.message ?? 'Unknown axios error')
            } 
            else return thunkApi.rejectWithValue('Unknown proccess error')
        }
    }
)

export default getConvsThunk