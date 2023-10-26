import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { IMessage, getMessagesThunkSchema } from "entities/Messages/model/types/messages.state";
import $api from "shared/lib/axiosApi/axiosApi";

const getMessagesThunk = createAsyncThunk<IMessage[], string, { rejectValue: string }>(
    '/messages/getMessagesThunk',
    async (conv_id, thunkApi) => {
        try {
            const { data } = await $api.get(`/mes?conv_id=${conv_id}`)
            const checkData = getMessagesThunkSchema.safeParse(data)
            if (checkData.success) {
                return checkData.data
            } else {
                console.log(checkData.error.message)
                return thunkApi.rejectWithValue(checkData.error.message)
            }
        } catch (error) {
            console.log(error)
            if (isAxiosError(error)) {
                return thunkApi.rejectWithValue(error.response?.data?.message ?? 'Unknown axios error')
            } 
            else return thunkApi.rejectWithValue('Unknown proccess error')
        }
    }
)

export default getMessagesThunk