<script lang="ts">
    // this setup loses state when on a not-found page
    import PostNotFound from "data/posts/post-not-found.svelte.md";
    import type { Component } from "svelte";
    import type { PageProps } from "./$types";

    let { params }: PageProps = $props();

    let post_prop = $derived.by(async () => {
        try {
            return (await import(`data/posts/${params.postname}.svelte.md`)).default;
        } catch (err) {
            return (await import(`data/posts/post-not-found.svelte.md`)).default;
        }
    });

    let Post: Component|null = $state(PostNotFound);

    let get_post = async () => { Post = await post_prop; return Post; };

</script>

<a href="/posts"><span class="text-sm">&lt;</span> back to all posts</a>

{#if await get_post() !== null}
    <Post />
{:else}
    <h1>loading...</h1>
{/if}
