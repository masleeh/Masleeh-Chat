import { z } from "zod";

export const uploadProficePicResSchema = z.object({
    profile_pic: z.string()
}) 