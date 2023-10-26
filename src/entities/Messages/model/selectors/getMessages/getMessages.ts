import { createSelector } from "@reduxjs/toolkit";
import { getMessagesState } from "../getMessagesState/getMessagesState";
import { IMessagesSchema } from "../../types/messages.state";

export const getMessages = createSelector(getMessagesState, (state: IMessagesSchema) => state.messages)