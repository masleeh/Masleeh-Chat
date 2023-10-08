import { z } from "zod";

export interface ICreateConversationDto {
    user_ids: string[];
    title?: string;
    type: 'private' | 'group';
    user_id: string;
}

export const CreateConvResSchema = z.object({
    conv_id: z.string().nonempty({ message: "conv_id is undefined" })
})

export type CreateConvResType = z.infer<typeof CreateConvResSchema>

export const SearchUserSchema = z.object({
    users: z.array(z.object({
        username: z.string().trim().min(1),
        user_id: z.string().trim().min(1),
        profile_pic: z.string().trim().min(1)
    }))
})

export type SearchUserType = z.infer<typeof SearchUserSchema>