import _ from 'lodash';
import { Store } from '@ngrx/store';
import { UserService } from '../../services';
import { TFullUserInfo } from '../../types';
import { TStore } from '../index';
import { setUserInfo } from '../reducers/user.reducer';

export const loadUserInfo = (
	userService: UserService,
	store: Store<TStore>,
	callback: () => void = _.noop
) => {
	userService.getUserInfo().subscribe((userInfo: TFullUserInfo) => {
		store.dispatch(setUserInfo({ payload: userInfo }));
		callback();
	});
};
