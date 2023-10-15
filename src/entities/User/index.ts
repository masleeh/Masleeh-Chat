import { userActions, userReducer } from './model/slice/user.slice'
import type { IUserSchema, IUser } from './model/types/user.state'
import { getUserId } from './model/selectors/getUserId/getUserId'

export {
    userActions,
    userReducer,
    getUserId
} 

export type { 
    IUserSchema, 
    IUser
}