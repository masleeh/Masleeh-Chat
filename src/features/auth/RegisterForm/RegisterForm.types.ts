import { z } from "zod";

export const RegisterFormSchema = z.object({
    username: z.string().nonempty({ message: 'provide_nonempty_value' }),
    password: z.string().nonempty({ message: 'provide_nonempty_value' }),
    confirm: z.string().nonempty({ message: 'provide_nonempty_value' })
}).refine((data) => data.password === data.confirm, {
    message: 'passwords_must_match',
    path: ['confirm']
})

export type RegisterFormType = z.infer<typeof RegisterFormSchema>