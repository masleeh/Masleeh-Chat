import { getDialogData } from "./model/selectors/getDialogData/getDialogData";
import { getDialogState } from "./model/selectors/getDialogState/getDialogState";
import { participantActions, participantReducer } from "./model/slice/participant.slice";
import { IPartData, IParticipantSchema } from "./model/types/participant.state";

export type {
    IParticipantSchema,
    IPartData
}

export {
    participantActions,
    participantReducer,
    getDialogData,
    getDialogState
}