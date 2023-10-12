import { z } from "zod";

export type TConvItem = {
    conv_id: string;
    last_message?: string;
    username: string;
    profile_pic?: string;
    unread_count: number;
}

export interface IConvSchema {
    convData: TConvItem[];
    isLoading: boolean;
    error: string;
}

export const ConvItemsShema = z.array(
    z.object({
        conv_id: z.string().trim().min(1),
        last_message: z.string().nullish().transform(x => x ?? undefined).optional(),
        username: z.string().trim().min(1),
        profile_pic: z.string().nullish().transform(x => x ?? undefined).optional(),
        unread_count: z.number().int()
    })
)

export type ConvItemsType = z.infer<typeof ConvItemsShema>