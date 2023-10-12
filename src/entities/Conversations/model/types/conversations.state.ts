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