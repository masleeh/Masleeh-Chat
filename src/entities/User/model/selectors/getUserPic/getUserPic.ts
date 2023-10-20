import { createSelector } from "@reduxjs/toolkit";
import { getUserState } from "../getUserData/getUserData";
import { IUserSchema } from "../../types/user.state";

export const getUserPic = createSelector(getUserState, (state: IUserSchema) => (
    state.userData?.profile_pic ?? ''
))