import { createSelector } from "@reduxjs/toolkit";
import { getUserState } from "../getUserData/getUserData";
import { IUserSchema } from "../../types/user.state";

export const getUserId = createSelector(getUserState, (state: IUserSchema) => {
    if (state.userData) return state.userData.user_id
    else return ''
})