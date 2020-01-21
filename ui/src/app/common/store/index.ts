import { myUserReducer, TStoreUserInfo } from './reducers/user.reducer';

export type TStore = {
	userInfo: TStoreUserInfo
}

export const getReducers = () => ({
	userInfo: myUserReducer,
});

