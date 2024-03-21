<!-- src/components/Post.svelte -->
<script lang="ts">
	import type { Post as PostType } from '$lib/types';
	import Comment from './Comment.svelte';

	export let post: PostType;

	const formatDate = (dateString:string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const navigateToPost = () => {
    if (post && post.URL) {
      window.location.href = post.URL;
    }
  };
</script>

<a
  class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
  on:click={navigateToPost}
>
  <div class="px-6 py-4">
    <h2 class="font-bold text-xl mb-2">{post.title}</h2>
    <p class="text-gray-700 text-base">
      ID: {post.ID}
    </p>
    <p class="text-gray-700 text-base">
      Author: {post.author.name}
    </p>
    <p class="text-gray-700 text-base">
      Date: {formatDate(post.date)}
    </p>
    <p class="text-gray-700 text-base">
      Slug: {post.slug}
    </p>
  </div>

  {#if post.comment}
  <div class="mt-4 bg-gray-100">
	  <Comment comment={post.comment} />
  </div>
{/if}
</a>


<style lang="postcss">
	.post {
		@apply p-4 border mb-4;
		/* Additional styling removed for clarity since we're using @apply with Tailwind */
	}
</style>
