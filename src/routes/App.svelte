<script lang="ts">
	import { onMount } from 'svelte';
	import Post from '../components/Post.svelte';
	import { get } from 'svelte/store';
	import { loadCommentForPost, loadPosts, posts } from '../stores/postStore';

	let isLoadingComments = false;
	let isLoadingPosts = false;
	let errorMessage = ''; // Add an error message state
	onMount(async () => {
		isLoadingPosts=true;
		try {
			await loadPosts();
		} catch (error) {
			errorMessage = 'Failed to load posts. Please try again later.';
			console.error(error);
		}
		finally{
			isLoadingPosts=false;
		}
	});

	async function fetchCommentsSequentially() {
		isLoadingComments = true;
		errorMessage = '';
		const $posts = get(posts); // Use get() to access store value
		try {
			for (let post of $posts) {
				await loadCommentForPost(post.ID);
			}
		} catch (error) {
			errorMessage = 'Failed to load comments. Please try again later.';
			console.error(error);
		} finally {
			isLoadingComments = false;
		}
	}
</script>

{#if errorMessage}
	<p class="error">{errorMessage}</p>
{/if}


{#if isLoadingPosts}
	<p>Loading posts...</p>
{:else}
	{#each $posts as post}
		<Post {post} />
	{/each}
	{#if isLoadingComments }
		<p>Loading comments...</p>
	{:else}
		<button on:click={fetchCommentsSequentially}>Load Comments</button>
	{/if}

{/if}

<style>
	.error {
		color: red;
	}
</style>
