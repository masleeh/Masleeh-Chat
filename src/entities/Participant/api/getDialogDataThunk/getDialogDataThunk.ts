import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetDialogDataThunkSchema, IPartData } from "../../model/types/participant.state";
import $api from "shared/lib/axiosApi/axiosApi";
import { isAxiosError } from "axios";

const getDialogDataThunk = createAsyncThunk<IPartData, string, { rejectValue: string }>(
    'participants/getDialogDataThunk',
    async (conv_id, thunkApi) => {
        try {
            const { data } = await $api.get(`/conversations/s?conv_id=${conv_id}`)
            const checkData = GetDialogDataThunkSchema.safeParse(data)
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

export default getDialogDataThunk