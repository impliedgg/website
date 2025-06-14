<script lang="ts">
    import Card from "../card.svelte";
    import Cardcontainer from "../cardcontainer.svelte";
    import { type cardData } from '$lib';

        let cards: cardData[] = [
        {
            title: "portproxy",
            description: "A stupid simple port-to-port reverse proxy.",
            language: "Go",
            url: "https://github.com/impliedgg/portproxy"
        },
        {
            title: "donottwitter",
            description: "A userscript to remove your ability to browse Twitter (now X).",
            language: "JavaScript",
            url: "https://github.com/impliedgg/donottwitter"
        }
    ];
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<h1>portfolio</h1>

<p>
    this will be a more extensive version of the showcase on my homepage once i have more projects worth sharing.
    for now, this is a bit empty.
</p>

<Cardcontainer>
    {#each cards as c}
        <Card title={c['title']} description={c['description']} language={c['language']} url={c['url']}></Card>
    {/each}
</Cardcontainer>
<!-- 
<p>
    why not check out <a href="https://github.com/impliedgg" target="_blank"
        >my github</a
    > in the meantime?
</p> -->
