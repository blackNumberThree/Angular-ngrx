// unused alternative option
import { createSelector,createFeatureSelector } from '@ngrx/store';
import {  iUser } from "./users.reducer"

const selectUsers = (state: any) => state.users;

export const selectUserCount = createSelector(
  selectUsers,
  (state: iUser[]) => state
);
 export const selectFeature = createFeatureSelector<any, iUser>("users");
