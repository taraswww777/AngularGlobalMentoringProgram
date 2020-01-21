import { createReducer, on, createAction, props } from '@ngrx/store';
import { TFullUserInfo } from '../../types';

export type TStoreUserInfo = TFullUserInfo

export const setUserInfo = createAction('user.setUserInfo', props<{ payload: TStoreUserInfo }>());
export const getUserInfo = createAction('user.getUserInfo');

const _reducer = createReducer({},
	on(setUserInfo, (state, { payload }) => ({ ...state, ...payload })),
	on(getUserInfo, state => ({ ...state })),
);

export function myUserReducer(state, action) {
	return _reducer(state, action);
}
