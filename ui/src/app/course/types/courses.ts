
export type TAuthor = {
	id: number;
	name: string;
	lastName: string;
}

export type TCourse = {
	id: number;
	name: string;
	description: string;
	isTopRated: boolean;
	date: string;
	authors: TAuthor[];
	length: number;
};
