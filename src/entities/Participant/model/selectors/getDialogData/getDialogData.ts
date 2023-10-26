import { initialState } from "../../slice/participant.slice";
import { createSelector } from "@reduxjs/toolkit";
import { getDialogState } from "../getDialogState/getDialogState";
import { IParticipantSchema } from "../../types/participant.state";

export const getDialogData = createSelector(getDialogState, (state: IParticipantSchema) => {
    return state.partData ?? initialState.partData
})