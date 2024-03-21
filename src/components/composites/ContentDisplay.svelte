<script lang="ts">
    import { writable } from 'svelte/store';
    
    export let content = null;

    let showFullContent = writable(false);
  
    // Helper function to truncate text
    function truncateText(text, maxLength = 100) {
      if (text.length <= maxLength) return text;
      return `${text.substring(0, maxLength)}...`;
    }
  </script>
  

<div class="text-gray-800 mt-2">
    {#if $showFullContent}
    {@html content}
    <a href="javascript:void(0)" class="text-blue-500 text-sm" on:click={() => showFullContent.set(false)}> Show Less</a>
    {:else}
    {@html truncateText(content)}
    {#if content.length > 100}
        <a href="javascript:void(0)" class="text-blue-500 text-sm" on:click={() => showFullContent.set(true)}> Show More</a>
    {/if}
    {/if}
</div>
