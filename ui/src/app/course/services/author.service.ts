import _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TAuthors, TCourse } from '../types';
import { joinUrl } from '../../common/utils/string';
import { BASE_URL } from '../../common/consts';


@Injectable()
export class AuthorService {

	private _baseUrl: string = joinUrl([BASE_URL, 'authors',]);

	constructor(private _httpClient: HttpClient) {
	}

	public getAuthors(): Observable<TAuthors[]> {
		let prepareParams = {};

		return this._httpClient.get<TAuthors[]>(this._baseUrl, {
			params: prepareParams
		});
	}

	public getAuthor(courseId: number): Observable<TCourse> {
		return this._httpClient.get<TCourse>(joinUrl([
			this._baseUrl,
			_.toString(courseId)
		]));
	}
}
