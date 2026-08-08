<script lang="ts">
    import Contact from "./contact.svelte";

    import { contacts } from "$lib/data/contacts";
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<h1>contacts</h1>

<p>
    various methods of contacting me. i'm most likely to respond quickly on
    discord or telegram, but i will respond to emails when i see them.
</p>
<div>
    {#each contacts as { name, label, type, data }}
        <Contact {name} {label} {type} {data}></Contact>
    {/each}
</div>

<style>
</style>
