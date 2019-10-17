import {ICourse} from "../interfaces/course";

export type CourseProps = {
  Id: number;
  Title: string;
  CreationDate: string;
  Duration: number;
  Description: string;
};

export class Course implements ICourse {
  CreationDate: string = '';
  Description: string = '';
  Duration: number = 30;
  Id: number = 0;
  Title: string = '';

  constructor(props: CourseProps) {
    this.Id = props.Id;
    this.Title = props.Title;
    this.CreationDate = props.CreationDate;
    this.Duration = props.Duration;
    this.Description = props.Description;
  }
}
