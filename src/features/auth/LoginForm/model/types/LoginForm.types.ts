import { z, ZodType } from "zod";

export const LoginFormSchema: ZodType = z.object({
    username: z.string().nonempty({ message: "provide_nonempty_value" }),
    password: z.string().nonempty({ message: "provide_nonempty_value" })
})

export type LoginFormType = z.infer<typeof LoginFormSchema>