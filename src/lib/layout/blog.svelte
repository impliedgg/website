<script lang="ts">
    let { frontmatter, children } = $props();

    import { page } from '$app/state';
</script>

<style>
</style>

<svelte:head>
    <title>implied.win - post - {frontmatter.title}</title>
    <meta property="og:title" content="implied.win - post - {frontmatter.title}">
	<meta property="og:description" content={frontmatter.description}>
	<meta property="og:url" content="https://implied.win{page.url.pathname}">
	<meta property="og:type" content="website">
</svelte:head>

<h1>{frontmatter.title}</h1>
{#if frontmatter.date !== undefined}
<h6 class="text-text-subtle dark:text-dark-text-subtle">written {frontmatter.date}</h6>
{/if}
<span class="mb-12"></span>
{@render children?.()}