import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({ name: 'UpperFirstCase' })
export class UpperFirstCasePipe implements PipeTransform {

	transform(value: string): string {
		return _.upperFirst(value);
	}
}
