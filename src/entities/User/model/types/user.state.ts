export interface IUserSchema {
    userData?: IUser;
}

export interface IUser {
    user_id: string;
    username: string;
    profile_pic: string;
}