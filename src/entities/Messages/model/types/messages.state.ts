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