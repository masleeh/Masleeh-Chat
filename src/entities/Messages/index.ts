import getMessagesThunk from "./api/getMessagesThunk/getMessagesThunk";
import { getMessages } from "./model/selectors/getMessages/getMessages";
import { getMessagesState } from "./model/selectors/getMessagesState/getMessagesState";
import { messagesActions, messagesReducer } from "./model/slice/messages.slice";
import type { IMessage, IMessagesSchema } from "./model/types/messages.state";

export {
    messagesActions,
    messagesReducer,
    getMessagesThunk,
    getMessagesState,
    getMessages
}

export type {
    IMessagesSchema,
    IMessage
}