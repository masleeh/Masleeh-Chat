import { userActions, userReducer } from './model/slice/user.slice'
import type { IUserSchema, IUser } from './model/types/user.state'
import { getUserId } from './model/selectors/getUserId/getUserId'
import { getUserPic } from './model/selectors/getUserPic/getUserPic'

export {
    userActions,
    userReducer,
    getUserId,
    getUserPic,
} 

export type { 
    IUserSchema, 
    IUser
}