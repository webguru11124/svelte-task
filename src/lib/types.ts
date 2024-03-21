export interface Post {
	ID: number;
	title: string;
	content: string;
	comment?: Comment; // Optional property to hold the comment once loaded
	URL: string;
	author: Author;
	date: string;
	slug: string;
}

export interface Author {
	name: string;
}
export interface Comment {
	ID: number;
	content: string;
	author: Author;
	date: string;
	status: string;
	like_count: string;
}
