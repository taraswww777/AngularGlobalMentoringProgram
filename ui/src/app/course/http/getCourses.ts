import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BASE_URL } from '../../common/consts';
import { joinUrl } from '../../common/utils/string';
import _ from 'lodash';

export function getCourses(httpClient: HttpClient, courseId?: number) {
	return httpClient.get(joinUrl([
		BASE_URL,
		'courses',
		courseId && _.toString(courseId)
	]));
}


export function deleteCourse(httpClient: HttpClient, courseId: number) {
	return httpClient.delete(joinUrl([
		BASE_URL,
		'courses',
		_.toString(courseId)
	]));
}

export function redirectToCourses(router: Router) {
	router.navigate(['/courses']).catch((e: Error) => {
		console.log('e:', e);
	});
}
