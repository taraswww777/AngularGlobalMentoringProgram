import { createReducer, on, createAction, props } from '@ngrx/store';
import { TCourse } from '../../types';

export const setCoursesList = createAction('courses.getCoursesList', props<{ payload: TCourse[] }>());

const _reducer = createReducer({},
	on(setCoursesList, (state, { payload: courses }) => {
		return { ...state, courses: [...courses] };
	})
);

export function myCoursesListReducer(state, action) {
	return _reducer(state, action);
}
