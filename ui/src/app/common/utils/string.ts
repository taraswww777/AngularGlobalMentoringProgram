import _ from 'lodash';

export function joinUrl(url: string | string[]) {
	return _.isArray(url) ? _.join(_.compact(url), '/') : url;
}
