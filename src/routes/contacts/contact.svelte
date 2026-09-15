<script lang="ts">
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

{#snippet button()}
    <button class="my-0.5 px-1 text-2xl md:text-lg lg:text-base hover:cursor-pointer hover:brightness-80 hover:bg-surface-15 hover:dark:bg-surface-100 hover:dark:brightness-120">
        <span>{name}</span>
    </button>
    <span>{display}</span>
{/snippet}

{#if type == "copy"}
    <div
        aria-hidden="true"
        onclick={() => {
            handleClick("copy");
        }}
    >
        {@render button()}
    </div>
{:else if type == "link"}
    <div>
        <a class="text-text! dark:text-dark-text!" href={data} target="_blank">
            {@render button()}
        </a>
    </div>
{:else}
    <span
        >[there should be another contact method here; please contact me via
        email if you see this.]</span
    >
{/if}

<style>
</style>
