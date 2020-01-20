import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
	public _countRequests: number = 0;

	public get isLoading(): boolean {
		return Boolean(this._countRequests > 0);
	};

	public startRequest() {
		this._countRequests++;
	}

	public finishRequest() {
		this._countRequests--;
	}

}
