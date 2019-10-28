import {IUser} from "src/interfaces/user";

export type UserProps = {
	id: number;
	firstName: string;
	lastName: string;
};

export class User implements IUser {
	public id: number;
	public firstName: string;
	public lastName: string;

	constructor(props: UserProps) {
		this.id = props.id;
		this.firstName = props.firstName;
		this.lastName = props.lastName;
	}
}
