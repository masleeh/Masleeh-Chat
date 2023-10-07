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