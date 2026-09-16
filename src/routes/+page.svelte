<!-- 
    LICENSE EXCEPTION: This file is licensed under the zlib/libpng license with an additional restriction on identity.
    See `licenses/zlib-extra-clause.txt` for terms. 
-->

<script lang="ts">
    import CardContainer from "components/card-container.svelte";
    import Card from "components/card.svelte";
    
    import { showcase_cards } from "data/cards";
</script>

<svelte:head>
    <meta name="description" content="emily's personal website. find my portfolio, contacts, and a biography.">
</svelte:head>

<h1 class="mb-0">hi, i'm emily</h1>
<p class="text-text-subtle dark:text-dark-text-subtle"><span>she/her</span> ∙ <span>developer & student</span></p>

<p>i'm a gal that loves to code and publishes the occasional project.
    you can find me on games such as factorio, valorant, or splitgate, and in my ide doing whatever.
</p>
<p>
    i'm part time enrolled in college, working towards an associate's in computer programming and a bachelor's in cybersecurity.
    i'm self employed, and open for work on fullstack applications, alongside true backend work.
</p>
<br>

<h2>showcased projects</h2>
<CardContainer>
    {#each showcase_cards as c}
        <Card {...c} />
    {/each}
</CardContainer>
<a href="/portfolio">see more here <small>&gt;</small></a>

<style>
    /* h1 + p {
        color: var(--layer-10);
        margin-top: 0;
    } */
</style>

<!--- mastodon verification - i have an account on tech.lgbt, but it is pretty much unused. --->
<a aria-hidden="true" style="display:none;" rel="me" href="https://tech.lgbt/@implied"></a> 