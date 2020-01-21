import { myCoursesListReducer } from './reducers/courses.reducer';


export const getCoursesReducers = () => ({
	coursesStore: myCoursesListReducer,
});

