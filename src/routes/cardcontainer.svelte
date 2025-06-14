<script lang="ts">
    let { children } = $props();
</script>

<div class="portfolio-container">
    {@render children?.()}
</div>

<style>

    .portfolio-container {
        margin: 0 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-width: auto;
        column-count: 2;
        column-gap: 1.5em;
        row-gap: 1.5em;
        justify-content:space-evenly;
    }

    @media screen and (max-width: 800px) {
        .portfolio-container {
            flex-direction: column;
        }
    }
</style>
