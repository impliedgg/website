<script lang="ts">
    let { children } = $props();
</script>

<div class="m-0 grid gap-x-2 gap-y-2 w-full grid-cols-1 lg:grid-cols-2">
    {@render children?.()}
</div>

<style>
    /* for some godforsaken reason, removing this style causes the children prop to not work. */
</style>