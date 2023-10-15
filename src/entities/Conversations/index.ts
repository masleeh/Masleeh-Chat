import { convActions, convReducer } from "./model/slice/conversations.slice";
import getConvsThunk from "./api/getConvsThunk/getConvsThunk";
import { getConvState } from "./model/selectors/getConvState/getConvState";
import { getConvData } from "./model/selectors/getConvData/getConvData";

export {
    convActions, 
    convReducer,
    getConvsThunk,
    getConvState,
    getConvData
}