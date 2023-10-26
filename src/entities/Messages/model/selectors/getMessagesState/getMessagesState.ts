import { IStateSchema } from "app/providers/store";
import { initialState } from "../../slice/messages.slice";

export const getMessagesState = (state: IStateSchema) => state.messages ?? initialState