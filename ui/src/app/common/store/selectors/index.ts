import { createSelector } from '@ngrx/store';
import { COMMON_MODULE_NAME } from '../../config';
import { TStoreCommonModule, TStoreCommon } from '../index';
import { TStoreUserInfo } from '../reducers/user.reducer';


export const getUserInfo = createSelector(
	(state: TStoreCommonModule) => (state[COMMON_MODULE_NAME]),
	(coursesStore: TStoreCommon): TStoreUserInfo => coursesStore.userInfo
);
