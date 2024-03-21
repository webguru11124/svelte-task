export interface Post {
	ID: number;
	title: string;
	content: string;
	comment?: Comment; // Optional property to hold the comment once loaded
	URL: string;
	author: { name: string };
	date: string;
	slug: string;
}

export interface Comment {
	ID: number;
	content: string;
}
