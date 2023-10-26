import { CombinedState, Reducer, ReducersMapObject, StoreEnhancer } from "@reduxjs/toolkit";
import { IConvSchema } from "entities/Conversations/model/types/conversations.state";
import { IMessagesSchema } from "entities/Messages";
import { IParticipantSchema } from "entities/Participant";
import { IThemeSchema } from "entities/Theme";
import { IUserSchema } from "entities/User";

export interface IStateSchema {
    user: IUserSchema;
    theme: IThemeSchema;

    // Async Reducers
    coversation?: IConvSchema;
    participants?: IParticipantSchema;
    messages?: IMessagesSchema;
}

type OnlyOptionalKeys<State> = keyof { [K in keyof State as [undefined] extends [State[K]] ? K : never]: true }

export type StateSchemaKey = OnlyOptionalKeys<IStateSchema>

export interface ReducerManager<IStateSchema> {
    getReducerMap: () => ReducersMapObject<IStateSchema>;
    reducer: Reducer<CombinedState<IStateSchema>>;
    add: <K extends keyof IStateSchema>(key: K, reducer: Reducer<Exclude<IStateSchema[K], undefined>>) => void;
    remove: (key: OnlyOptionalKeys<IStateSchema>) => void;
    enhancer: StoreEnhancer<{ reducerManager: ReducerManager<IStateSchema>}>;
}