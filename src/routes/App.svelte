<script lang="ts">
	import { onMount } from 'svelte';
	import Post from '../components/Post.svelte';
	import Spinner from '../components/primitives/Spinner.svelte';
	import { get } from 'svelte/store';
	import { loadCommentForPost, loadPosts, posts } from '../stores/postStore';
  
	let isLoadingComments = false;
	let isLoadingPosts = false;
	let errorMessage = ''; // Add an error message state
  
	onMount(async () => {
	  isLoadingPosts = true;
	  try {
		await loadPosts();
	  } catch (error) {
		errorMessage = 'Failed to load posts. Please try again later.';
		console.error(error);
	  }
	  finally {
		isLoadingPosts = false;
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
	<p class="text-red-500">{errorMessage}</p>
  {/if}
  
  {#if isLoadingPosts}
  <Spinner title={"Loading posts..."}/>
  {:else}
  	<div class="flex flex-column">
	  {#each $posts as post}
		<Post {post} />
	  {/each}</div>
	<div class="mt-5">
	{#if isLoadingComments}
		<Spinner title={"Loading comments..."}/>
	{:else}
	  <div class="text-center">
		<button 
		  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
		  on:click={fetchCommentsSequentially}>
		  Load Comments
		</button>
	  </div>
	{/if}
</div>
  {/if}
  
  <style>
	/* You can still keep your custom styles if needed */
  </style>
  