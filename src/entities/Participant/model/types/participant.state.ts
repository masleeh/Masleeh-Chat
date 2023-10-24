export type TUserParticipant = {
    username: string;
    user_id: string;
    profile_pic?: string;
}

export interface IPartData {
    type: string;
    users: TUserParticipant[];
    title?: string;
}

export interface IParticipantSchema {
    isLoading: boolean;
    error: string;
    partData: IPartData;
    _inited: boolean;
}