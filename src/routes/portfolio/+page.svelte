<script lang="ts">
    import Card from "$lib/card.svelte";
    import CardContainer from "$lib/card-container.svelte";
    import { cards } from '$lib/data/cards';
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<h1>portfolio</h1>

<p>
    this will be a more extensive version of the showcase on my homepage once i have more projects worth sharing.
    for now, this is a bit empty.
</p>

<CardContainer>
    {#each cards as c}
        <Card {...c}/>
    {/each}
</CardContainer>