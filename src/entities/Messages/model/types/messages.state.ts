import { z } from "zod";

export interface IMessage {
    mes_id: string;
    user_id: string;
    conv_id: string;
    status: string;
    body: string;
    type: string;
    createdAt: string;
}

export interface IMessagesSchema {
    isLoading: boolean;
    error: string;
    messages: IMessage[]; 
}

export const getMessagesThunkSchema = z.array(z.object({
    mes_id: z.string().trim().min(1),
    user_id: z.string().trim().min(1),
    conv_id: z.string().trim().min(1),
    status: z.string().trim().min(1),
    body: z.string().trim().min(1),
    type: z.string().trim().min(1),
    createdAt: z.string().trim().min(1),
}))