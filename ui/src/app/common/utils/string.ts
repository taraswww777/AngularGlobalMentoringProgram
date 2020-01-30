import _ from 'lodash';

export function joinUrl(url: string | string[]) {
	return _.isArray(url) ? _.join(_.compact(url).map((urlPart: string) => (
		_.trim(urlPart, '/')
	)), '/') : url;
}


export function normaliserDateDDMMYYYY(date: string): string {
	const resultDate = 'T00:00:01+00:00';
	const [day, month, year] = _.split(date, '/');

	return `${year}-${month}-${day}${resultDate}`;
}
