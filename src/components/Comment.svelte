<!-- src/components/Comment.svelte -->
<script lang="ts">
	import type { Comment } from '$lib/types';
	import {formatDate} from "$lib/helper/date.ts"
	export let comment: Comment ;
	
</script>

<div class="bg-gray-100 p-4 rounded-lg shadow mt-2">
	<div class="font-semibold text-gray-800">
	  {comment.author.name}
	  <span class="text-sm text-gray-600"> - {formatDate(comment.date)}</span>
	</div>
	<div class="text-gray-800 mt-2">
	  {@html comment.content}
	</div>
	<div class="flex items-center justify-between mt-2">
	  <span class="text-gray-600 text-sm">Status: {comment.status}</span>
	  <span class="flex items-center text-gray-600">
		<svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
		{comment.like_count} Likes
	  </span>
	</div>
  </div>
