<script lang="ts">
    import { type Post } from "data/posts";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>implied.win - posts</title>
    <meta property="og:title" content="implied.win - posts">
	<meta property="og:description" content="blogposts, writeups, and other various ramblings in one bin.">
	<meta property="og:url" content="https://implied.win/posts">
	<meta property="og:type" content="website">
	<meta name="description">
</svelte:head>

{#snippet postlist(post: Post)}
    <li>
        <a href="/posts/{post.fname}" class="text-text! dark:text-dark-text!">
            <div
                class="p-4 border-2 border-surface-30 dark:border-surface-90 rounded-2xl block relative"
            >
                <h2>
                    {post.title}
                </h2>
                <span class="absolute right-4 top-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-3.5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </span>
                {#if post.date}
                    <span class="text-base md:text-sm align-text-top"
                        >written {post.date}</span
                    >
                {/if}
                <div class="inline">
                    {#each post.tags as tag}
                        <span class="m-0.5 text-dark-text-subtle">#{tag}</span>
                    {/each}
                </div>
                <p>
                    {post.description}
                </p>
            </div>
        </a>
    </li>
{/snippet}

<h1>posts</h1>

<p>
    blogposts, writeups, and other various ramblings in one bin.
</p>

<ul class="grid grid-cols-1 w-full mt-4 gap-y-4">
    {#each data.posts as post}
        {@render postlist(post)}
    {/each}
</ul>
