import { IStateSchema } from "app/providers/store";
import { initialState } from "../../slice/conversations.slice";

export const getConvState = (state: IStateSchema) => state.coversation ?? initialState