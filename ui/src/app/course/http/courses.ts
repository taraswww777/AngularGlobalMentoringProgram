import _ from 'lodash';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BASE_URL } from '../../common/consts';
import { joinUrl } from '../../common/utils/string';
import { TCourse } from '../models/course';

export function getCourses(httpClient: HttpClient, start: number = 0, count: number = 5): Observable<TCourse[]> {
	return httpClient.get<TCourse[]>(joinUrl([
		BASE_URL,
		'courses',
	]), {
		params: {
			start: _.toString(start),
			count: _.toString(count)
		}
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
