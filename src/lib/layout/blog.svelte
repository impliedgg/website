<script lang="ts">
    let { frontmatter, children } = $props();
</script>

<style>
</style>

<h1>{frontmatter.title}</h1>
{#if frontmatter.date !== undefined}
<h6 class="text-text-subtle dark:text-dark-text-subtle">written {frontmatter.date}</h6>
{/if}
<span class="mb-12"></span>
{@render children?.()}