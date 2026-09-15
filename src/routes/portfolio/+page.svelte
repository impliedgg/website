<script lang="ts">
    import Card from "$lib/card.svelte";
    import CardContainer from "$lib/card-container.svelte";
    import { cards } from "$lib/data/cards";
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
    <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
    />
</svelte:head>

<h1>portfolio</h1>

<h2>skills</h2>

<p>i use the following programming languages, frameworks, and technologies:</p>
<div class="icon-container">
    <i title="Go" class="devicon-go-original-wordmark"></i>
    <i title="Python" class="devicon-python-plain"></i>
    <i title="JavaScript" class="devicon-javascript-plain"></i>
    <i title="TypeScript" class="devicon-typescript-plain"></i>
    <i title="C#" aria-label="C Sharp" class="devicon-csharp-plain"></i>
    <i title="Svelte and SvelteKit" class="devicon-svelte-plain"></i>
    <i title="TailwindCSS" class="devicon-tailwindcss-original"></i>
    <i title="Cloudflare" class="devicon-cloudflare-plain"></i>
    <i title="Cloudflare Workers" class="devicon-cloudflareworkers-plain"></i>
    <i title="Linux" class="devicon-linux-plain"></i>
    <i title="Windows" class="devicon-windows11-original"></i>
    <i title="NGINX" class="devicon-nginx-original"></i>
    <i title="Bash" class="devicon-bash-plain"></i>

    <i title="Adobe Illustrator" class="devicon-illustrator-plain"></i>

    <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
    />
</div>

<h2>projects</h2>

<p>
    this is a little empty, as most of my projects prior to ~2024 are private or
    lost to time. most of my current utilities here are small things i wrote to
    improve my own experience, and were published to help others who may have
    the same issues as me.
</p>
<p>
    do note that the list of projects here and on <a
        href="https://github.com/impliedgg">my github</a
    >
    are not a comprehensive showcase of my skills. certain skills were acquired via
    private work or work i cannot share publicly due to restrictions on what i'm
    allowed to share.
</p>

<CardContainer>
    {#each cards as c}
        <Card {...c} />
    {/each}
</CardContainer>

<style>
    .icon-container i {
        display: inline-block;
        font-size: 2.8rem;
        padding: .1rem;
    }
</style>
