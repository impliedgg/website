<script lang="ts">
    import Cardcontainer from "./cardcontainer.svelte";
    import Card from "./card.svelte";
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
    <meta name="description" content="emily's personal website. find my portfolio, contacts, and a biography.">
</svelte:head>


<h1>hi, i'm emily</h1>
<p><span>she/her</span> ∙ <span>developer & student</span></p>

<p>i'm a gal that loves to code and publishes the occasional project.
    you can find me on games such as factorio, valorant, or splitgate, and in my ide doing whatever.
</p>
<p>
    i'm currently studying as an AAS Computer Programming major, working towards a bachelor's in cybersecurity. i'm
    self-employed but open to software engineering or software development roles (prefer the former - i don't like <i>just</i>
    churning out code from a requirements doc.)
</p>
<br>
<p>
    i've made a few things - <a href="https://github.com/impliedgg">my github</a> has more, but these are
    the projects i think are worth linking here.
</p>

<Cardcontainer>
    {#each cards as c}
        <Card title={c['title']} description={c['description']} language={c['language']} url={c['url']}></Card>
    {/each}
</Cardcontainer>

<style>
    h1 {
        margin-bottom: 0;
    }
    h1 + p {
        color: var(--layer-10);
        margin-top: 0;
    }
</style>
