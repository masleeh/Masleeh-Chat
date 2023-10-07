import { createSelector } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/store/config/StateSchema";
import { IUserSchema } from "../../types/user.state";

export const getUserState = (state: IStateSchema) => state.user

export const getUserData = createSelector(getUserState, (user: IUserSchema) => user.userData)