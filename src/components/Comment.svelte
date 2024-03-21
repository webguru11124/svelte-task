<!-- src/components/Comment.svelte -->
<script lang="ts">
	import type { Comment } from '$lib/types';

	export let comment: Comment;
	console.log(comment);
</script>

<div class="comment" innerHTML={comment.content}></div>

<style>
	.comment {
		@apply mt-4 bg-gray-100 p-2;
	}
</style>
