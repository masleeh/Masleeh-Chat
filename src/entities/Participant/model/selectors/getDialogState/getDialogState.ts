import { IStateSchema } from "app/providers/store";
import { initialState } from "../../slice/participant.slice";

export const getDialogState = (state: IStateSchema) => state?.participants ?? initialState