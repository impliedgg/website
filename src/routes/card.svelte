<script lang="ts">
    import * as github_colors from "./github-colors.json";
    const colors: {
        [index: string]: { color: string | null; url: string | null };
    } = github_colors;
    let {
        url = "#",
        title = "Untitled",
        description = "A new description for a new project!",
        language = "Unknown",
        color = "#ffffff",
    } = $props();
    if (language == "Unknown") {
        color = "#ffffff";
    } else if (Object.hasOwn(colors, language)) {
        let temp_color: string | null = colors[language].color;
        if (temp_color) {
            color = temp_color;
        }
    }
    import BoxArrowUpRight from './bi-box-arrow-up-right.svelte'
</script>

<div class="portfolio-card">
    {#if url != "#"}
    <a href="{url}" target="_blank">
        <h2>{title}
            <span><BoxArrowUpRight></BoxArrowUpRight></span>
        </h2>
    </a>
    {:else}
        <h2>{title}</h2>
    {/if}
    
    <p>{description}</p>
    <span class="lang"
        ><span class="gh-color" style="background-color: {color}">&nbsp;</span
        ><span>{language}</span></span
    >
</div>

<style>
    :root {
        --outer-padding: 0.5em;
    }
    a, a:link, a:visited {
        text-decoration: none;
        color: inherit;
    }
    .portfolio-card {
        background-color: var(--layer-1);
        border: 2px solid var(--layer-4);
        border-radius: 0.25em;
        height: auto;
        padding: var(--outer-padding);
        padding-bottom: calc(var(--outer-padding) * 2);
        flex-basis: calc(50% - 3em);
        position: relative;
    }
    .portfolio-card h2 span {
        position: absolute;
        right: var(--outer-padding);
    }
    .portfolio-card h2,
    .portfolio-card p {
        margin: 0 auto;
    }
    .portfolio-card p {
        padding-bottom: 1em;
    }
    .lang {
        position: absolute;
        padding-top: auto;
        bottom: var(--outer-padding);
    }
    .gh-color {
        display: inline-block;
        vertical-align: sub;
        width: 1em;
        height: 1em;
        margin-right: 0.25rem;
        border-radius: 0.25em;
    }
</style>
