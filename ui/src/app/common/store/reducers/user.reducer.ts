import { createReducer, on, createAction, props } from '@ngrx/store';
import { TFullUserInfo } from '../../types';

export type TStoreUserInfo = TFullUserInfo

export const setUserInfo = createAction('user.setUserInfo', props<{ payload: TStoreUserInfo }>());

export const commonReducers = createReducer({},
	on(setUserInfo, (state, { payload: userInfo }) => ({ ...state, userInfo })),
);
