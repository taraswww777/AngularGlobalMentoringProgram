import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../common/consts';
import { joinUrl } from '../common/utils/string';

export type TLoginResponse = { token: string }

export function httpLogin(httpClient: HttpClient, login: string, password: string): Observable<TLoginResponse> {
	return httpClient.post<TLoginResponse>(joinUrl([
		BASE_URL,
		'/auth/login'
	]), {
		login,
		password
	});
}
