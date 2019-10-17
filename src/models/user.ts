import {IUser} from "src/interfaces/user";

export type UserProps = {
	Id: number;
	FirstName: string;
	LastName: string;
};

export class User implements IUser {
	public Id: number;
	public FirstName: string;
	public LastName: string;

	constructor(props: UserProps) {
		this.Id = props.Id;
		this.FirstName = props.FirstName;
		this.LastName = props.LastName;
	}
}
