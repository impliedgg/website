<script lang="ts">
    import { github_colors } from "$lib/data/github-colors";
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
        let temp_color: string | null = colors[language].color?.toLowerCase() ?? null;
        if (temp_color !== null) {
            color = temp_color;
        }
    }
</script>

<div class="px-2 pb-4 border-2 border-zinc-800 rounded-md relative">
    {#if url != "#"}
        <a href={url} target="_blank" class="text-text text-xl">
            <h2>
                {title}
                <span class="absolute right-2 pt-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-3.5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </span>
            </h2>
        </a>
    {:else}
        <h2 class="text-[--color-text]">{title}</h2>
    {/if}

    <p class="pb-6">{description}</p>
    <span class="bottom-1 absolute">
        <!-- cannot inline background color via css utility class since color is computed at runtime -->
        <span class="inline-block size-5 rounded-md mr-1" style="background-color: {color};"></span>
        <span class="align-top">{language}</span></span
    >
</div>