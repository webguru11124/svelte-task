import { writable } from 'svelte/store';
import type { Post } from '$lib/types';
import { fetchCommentForPost, fetchPosts } from '../services/wordpressService';

export const posts = writable<Post[]>([]);

export const loadPosts = async () => {
	const data = await fetchPosts();
	console.log(data);
	posts.set(data.posts);
};

export const loadCommentForPost = async (postId: number) => {
	const comment = (await fetchCommentForPost(postId)).comments[0];
	posts.update((allPosts) => {
		const postIndex = allPosts.findIndex((post) => post.ID === postId);
		if (postIndex !== -1) {
			allPosts[postIndex].comment = comment;
		}
		return allPosts;
	});
};
