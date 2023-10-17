import { createSelector } from "@reduxjs/toolkit";
import { getConvState } from "../getConvState/getConvState";
import { IConvSchema } from "../../types/conversations.state";
import { initialState } from "../../slice/conversations.slice";

export const getConvData = createSelector(getConvState, (convState?: IConvSchema) => (
    convState?.convData ?? initialState.convData)
)