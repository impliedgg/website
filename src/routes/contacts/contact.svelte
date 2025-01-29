<script lang="ts">
    import { browser } from "$app/environment";

    let {
        name = "unknown",
        label = "unknown",
        data = "n/a",
        type = "copy",
    } = $props();
    var display = $state();
    display = label;
    async function handleClick(type: string) {
        await navigator.clipboard.writeText(data);
        display = "copied!";
        setTimeout(() => {
            display = label;
        }, 1500);
    }
</script>

{#if type == "copy"}
    <div aria-hidden="true"
        onclick={() => {
            handleClick("copy");
        }}
    >
        <button
            onclick={() => {
                handleClick("copy");
            }}
        >
            <span>{name}</span>
        </button>
        <span>{display}</span>
    </div>
{:else if type == "link"}
    <div>
        <a href={data} target="_blank">
            <button>
                <span>{name}</span>
            </button>
            <span>{display}</span>
        </a>
    </div>
{:else}
    <span>this shouldn't be visible :p please contact me via email</span>
{/if}

<style>
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
    a {
        text-decoration: none;
        color: var(--content);
    }

    button {
        margin: 0.1em 0;
        background-color: #00000000;
        color: var(--content);
        border: 1px solid var(--layer-12);
        border-radius: 4px;
        padding: 0 0.25em;
    }
    button + span { margin-left: 0.25em; }
</style>
