import { z } from "zod";

export const getUserDataSchema = z.object({
    access_token: z.string().min(1),
    userData: z.object({
        username: z.string().trim().min(1),
        user_id: z.string().trim().min(1),
        profile_pic: z.string().nullish().transform(x => x ?? undefined).optional()
    })
})

export type getUserDataType = z.infer<typeof getUserDataSchema>