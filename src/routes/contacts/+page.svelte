<script lang="ts">
    import Contact from "./contact.svelte";

    type contactData = {
        name: string;
        label: string | undefined;
        type: "copy" | "link";
        data: string;
    };

    let contacts: contactData[] = [
        {
            name: "discord",
            label: "@impliedgg",
            type: "copy",
            data: "impliedgg",
        },
        {
            name: "telegram",
            label: "@emilyl04",
            type: "link",
            data: "https://t.me/emilyl04",
        },
        {
            name: "bluesky",
            label: "implied.win",
            type: "link",
            data: "https://bsky.app/profile/implied.win",
        },
        {
            name: "email",
            label: "me@implied.win",
            type: "link",
            data: "mailto:me@implied.win",
        },
    ];
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
