<script lang="ts">
    // ty to https://stackoverflow.com/a/70935503

    import { page } from '$app/state';
    let path = $derived(page.url.pathname);

    let {
        label = "link", href = "home", method = "exact"
    }: { label: string, href: string, method?: "exact"|"prefix" } = $props();

    const is_current = () => {
        if (method === "exact") {
            return path === href;
        } else {
            return path.startsWith(href);
        }
    }
</script>

<style>
</style>

<a {href}><button class="border-none! bg-surface-10 dark:bg-dark-bg sm:text-xl md:text-lg hover:cursor-pointer px-1 py-0 hover:bg-surface-20 hover:dark:bg-surface-100 hover:brightness-80 hover:dark:brightness-120 {is_current() ? "text-text dark:text-dark-text" : "text-surface-80 dark:text-surface-40"}">{label}</button></a>