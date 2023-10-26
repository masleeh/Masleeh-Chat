import { z } from "zod";

export type TUserParticipant = {
    username: string;
    user_id: string;
    profile_pic?: string;
}

export interface IPartData {
    type: string;
    users: TUserParticipant[];
    title?: string;
}

export interface IParticipantSchema {
    isLoading: boolean;
    error: string;
    partData: IPartData;
    _inited: boolean;
}

export const GetDialogDataThunkSchema = z.object({
    type: z.string().trim().min(1),
    users: z.array(z.object({
        username: z.string().trim().min(1),
        user_id: z.string().trim().min(1),
        profile_pic: z.string().nullish().transform(x => x ?? undefined).optional(),
    })).min(2),
    title: z.string().nullish().transform(x => x ?? undefined).optional(),
})