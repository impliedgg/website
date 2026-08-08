<!-- 
    LICENSE EXCEPTION: This file is licensed under the zlib/libpng license with an additional restriction on identity.
    See `licenses/zlib-extra-clause.txt` for terms. 
-->

<script>
    import Navbutton from "$lib/navbutton.svelte";

    let { children } = $props();
    let year = new Date().getFullYear();
</script>

<nav>
    <Navbutton label="home" href="/"></Navbutton>
    <Navbutton label="contacts" href="/contacts"></Navbutton>
    <Navbutton label="portfolio" href="/portfolio"></Navbutton>
</nav>

<main>
    {@render children()}
</main>

<footer>
    <div>
        <span>&copy; {year}-, emily</span> ∙ <span>avatar by unknown author</span><br> <!-- did try to find the author. -->
        <span>made with love, svelte, and one too many late nights</span>
    </div>
</footer>

<style>
    :root {
        width: max(80vw, 1200px);
        margin: 0 auto;
    }
    @media screen and (max-width: 1200px) {
        :root {
            width: 100%;
        }
    }
    nav {
        padding-bottom: 0;
    }
    main {
        flex: 1;
    }
    footer {
        color: var(--layer-10);
        width: 100%;
        position: relative;
        /* margin-top: min(auto, 1rem); */
        padding-top: 2rem;
    }
    footer div {
        width: 100%;
        border-top: 0.01rem solid var(--layer-10);
        position: relative;
    }
</style>
