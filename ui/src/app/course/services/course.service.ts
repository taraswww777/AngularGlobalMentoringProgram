import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import _ from 'lodash';
import { TCourse } from '../models/course';
import { joinUrl } from 'src/app/common/utils/string';
import { BASE_URL } from 'src/app/common/consts';
import { Observable } from 'rxjs';

export enum CoursesSort {
	id = 'id',
	name = 'name',
	description = 'description',
}


@Injectable()
export class CourseService {

	constructor(
		private _router: Router,
		private _httpClient: HttpClient
	) {
	}

	public getCourses(params: {
		start?: number,
		count?: number,
		sort?: CoursesSort,
		textFragment?: string,
	} = {}): Observable<TCourse[]> {
		let prepareParams = {};

		prepareParams['sort'] = params.sort ? params.sort : CoursesSort.id;

		if (params.start) {
			prepareParams['start'] = _.toString(params.start);
		}
		if (params.count) {
			prepareParams['count'] = _.toString(params.count);
		}
		if (params.textFragment) {
			prepareParams['textFragment'] = params.textFragment;
		}


		return this._httpClient.get<TCourse[]>(joinUrl([
			BASE_URL,
			'courses',
		]), {
			params: prepareParams
		});
	}

	public getCourse(courseId: number): Observable<TCourse> {
		return this._httpClient.get<TCourse>(joinUrl([
			BASE_URL,
			'courses',
			_.toString(courseId)
		]));
	}

	public updateCourse(courseId: number, course: TCourse) {
		return this._httpClient.put(joinUrl([
			BASE_URL,
			'courses',
			courseId && _.toString(courseId)
		]), course);
	}


	public addCourse(course: TCourse) {
		return this._httpClient.post(joinUrl([
			BASE_URL,
			'courses',
		]), course);
	}

	public deleteCourse(courseId: number) {
		return this._httpClient.delete(joinUrl([
			BASE_URL,
			'courses',
			_.toString(courseId)
		]));
	}

	public redirectToCourses(courseId?: number) {
		this._router.navigate(['/courses', courseId && _.toString(courseId)]).catch((e: Error) => {
			console.log('e:', e);
		});
	}

}
