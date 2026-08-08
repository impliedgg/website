<script lang="ts">
    let { children } = $props();
</script>

<div class="portfolio-container">
    {@render children?.()}
</div>

<style>

    .portfolio-container {
        margin: 0 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
        column-gap: 0.75em;
        row-gap: 0.75em;
    }

    @media screen and (max-width: 800px) {
        .portfolio-container {
            flex-direction: column;
        }
    }
</style>
