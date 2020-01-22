import { COMMON_MODULE_NAME } from '../config';
import { TStoreUserInfo } from './reducers/user.reducer';

export type TStoreCommon = {
	userInfo: TStoreUserInfo
}

export type TStoreCommonModule = {
	[COMMON_MODULE_NAME]: TStoreCommon
}

