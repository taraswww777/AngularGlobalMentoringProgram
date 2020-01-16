import _ from 'lodash';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BASE_URL } from '../../common/consts';
import { joinUrl } from '../../common/utils/string';
import { TCourse } from '../models/course';

enum CoursesSort {
	id = 'id',
	name = 'name',
	description = 'description',
}

export function getCourses(httpClient: HttpClient, params: {
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


	return httpClient.get<TCourse[]>(joinUrl([
		BASE_URL,
		'courses',
	]), {
		params: prepareParams
	});
}

export function getCourse(httpClient: HttpClient, courseId: number): Observable<TCourse> {
	return httpClient.get<TCourse>(joinUrl([
		BASE_URL,
		'courses',
		_.toString(courseId)
	]));
}

export function updateCourse(httpClient: HttpClient, courseId: number, course: TCourse) {
	return httpClient.put(joinUrl([
		BASE_URL,
		'courses',
		courseId && _.toString(courseId)
	]), course);
}

export function addCourse(httpClient: HttpClient, course: TCourse) {
	return httpClient.post(joinUrl([
		BASE_URL,
		'courses',
	]), course);
}

export function deleteCourse(httpClient: HttpClient, courseId: number) {
	return httpClient.delete(joinUrl([
		BASE_URL,
		'courses',
		_.toString(courseId)
	]));
}

export function redirectToCourses(router: Router, courseId?: number) {
	router.navigate(['/courses', courseId && _.toString(courseId)]).catch((e: Error) => {
		console.log('e:', e);
	});
}
