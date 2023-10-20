import { z } from "zod";

export const UpdateUserInfoSchema = z.object({
    username: z.string().trim().min(1, {message: 'Non-empty value required'})
})

export type UpdateUserInfoType = z.infer<typeof UpdateUserInfoSchema>

export const UpdateUserSchemaRes = z.object({
    username: z.string().trim().min(1),
    user_id: z.string().trim().min(1),
    profile_pic: z.string().nullish().transform(x => x ?? undefined).optional()
})