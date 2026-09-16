<script lang="ts">
    import Contact from "./contact.svelte";

    import { contacts } from "data/contacts";
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
    <title>implied.win - contacts</title>
    <meta property="og:title" content="implied.win - contacts">
	<meta property="og:description" content="my contact information on various socials.">
	<meta property="og:url" content="https://implied.win/contacts">
	<meta property="og:type" content="website">
	<meta name="description" content="my contact information on various socials.">
</svelte:head>

<h1>contacts</h1>

<p>
    various methods of contacting me. i'm most likely to respond quickly on
    discord or telegram, but i will respond to emails when i see them.
    <br><br>
    all contacts open in a new tab if there is a direct link, otherwise the information gets copied to your clipboard.
    <br><br> 
</p>
<div>
    {#each contacts as contact}
        <Contact {...contact} />
    {/each}
</div>

<style>
</style>
