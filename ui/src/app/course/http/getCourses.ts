import { HttpClient } from '@angular/common/http';
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
