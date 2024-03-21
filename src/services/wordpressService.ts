// src/lib/wordpressService.ts

const BASE_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com';

async function fetchPosts() {
	const response = await fetch(`${BASE_URL}/posts/?number=3`);
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
	return response.json();
}

async function fetchCommentForPost(postId: number) {
	const response = await fetch(`${BASE_URL}/posts/${postId}/replies/?number=1`);
	if (!response.ok) {
		throw new Error(`Failed to fetch comments for post ${postId}`);
	}
	return response.json();
}

export { fetchPosts, fetchCommentForPost };
