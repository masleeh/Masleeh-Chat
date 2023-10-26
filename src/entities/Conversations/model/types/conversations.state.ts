import { z } from "zod";

export type TUserParticipant = {
    username: string;
    user_id: string;
    profile_pic?: string;
}

export type TConvMessage = {
    mes_id: string;
    user_id: string;
    conv_id: string;
    status: string;
    body: string;
    type: string;
}

export type TConvItem = {
    conv_id: string;
    title?: string;
    type: string;
    last_message?: string;
    updatedAt: string;
    users: TUserParticipant[];
    message: TConvMessage[]
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
        updatedAt: z.string(),
        users: z.array(
            z.object({
                username: z.string(),
                user_id: z.string().trim().min(1),
                profile_pic: z.string().nullish().transform(x => x ?? undefined).optional(),
            })
        ),
        message: z.array(
            z.object({
                mes_id: z.string().trim().min(1),
                user_id: z.string().trim().min(1),
                conv_id: z.string().trim().min(1),
                status: z.string().trim().min(1),
                type: z.string().trim().min(1),
                body: z.string().trim().min(1)
            })
        ).length(1)
    })
)

export type ConvItemsType = z.infer<typeof ConvItemsShema>