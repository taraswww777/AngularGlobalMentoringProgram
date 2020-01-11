import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BASE_URL } from '../../common/consts';
import { joinUrl } from '../../common/utils/string';
import _ from 'lodash';
import { TCourse } from '../models/course';

export function getCourses(httpClient: HttpClient, courseId?: number) {
	return httpClient.get(joinUrl([
		BASE_URL,
		'courses',
		courseId && _.toString(courseId)
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
