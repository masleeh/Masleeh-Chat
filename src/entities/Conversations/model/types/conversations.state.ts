import { z } from "zod";

export type TUserParticipant = {
    username: string;
    user_id: string;
    profile_pic?: string;
}

export type TConvItem = {
    conv_id: string;
    title?: string;
    type: string;
    last_message?: string;
    users: TUserParticipant[];
}

export interface IConvSchema {
    convData: TConvItem[];
    isLoading: boolean;
    error: string;
}

export const ConvItemsShema = z.array(
    z.object({
        conv_id: z.string().trim().min(1),
        title: z.string().nullish().transform(x => x ?? undefined).optional(),
        type: z.string(),
        last_message: z.string().nullish().transform(x => x ?? undefined).optional(),
        users: z.array(
            z.object({
                username: z.string(),
                user_id: z.string().trim().min(1),
                profile_pic: z.string().nullish().transform(x => x ?? undefined).optional(),
            })
        )
    })
)

export type ConvItemsType = z.infer<typeof ConvItemsShema>