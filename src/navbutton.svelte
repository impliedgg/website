<script lang="ts">
    // ty to https://stackoverflow.com/a/70935503

    import { page } from '$app/stores';
    let path = $derived($page.url.pathname);

    let {
        label = "link", href = "home"
    } = $props();
</script>

<style>
    :root {
        --nav-active-link: var(--layer-11);
        --nav-main-link: var(--layer-8);
    }
    button {
        background-color: #00000000;
        border: 1px solid var(--nav-main-link);
        border-radius: 4px;
        color: var(--nav-main-link);
        padding: 0.25em 0.5em;
    }
    button.active {
        background-color: var(--layer-1);
        border-color: var(--nav-active-link);
        color: var(--nav-active-link);
    }
    @media screen and (max-width: 800px) {
        button {
            font-size: larger;
        }
    }
    @media screen and (min-width: 800px) and (max-width: 1200px) {
        button {
            font-size: large;
        }
    }
</style>

{#if path == href}
<a {href}><button class="active">{label}</button></a>
{:else}
<a {href}><button>{label}</button></a>
{/if}
