<script>
    import Navbutton from "../navbutton.svelte";

	let { children } = $props();
    let year = (new Date()).getFullYear();
</script>
<style>
    :root {
        width: 800px;
        margin: 0 auto;
        padding: 0 0;
    }
    @media screen and (max-width: 800px) {
        :root {
            width: 100%;
            font-size: larger;
        }
    }
    @media screen and (min-width: 800px) and (max-width: 1200px) {
        :root {
            font-size: large;
        }
    }
    nav {
        padding-bottom: 0;
    }
    footer {
        border-top: 1px solid var(--layer-10);
        color: var(--layer-10);
        width: 100%;
        position: relative;
        bottom: -4rem;
        padding: 2em auto;
        padding-bottom: 4rem;
    }
</style>
<nav>
    <Navbutton label="home" href="/"></Navbutton>
    <Navbutton label="contacts" href="/contacts"></Navbutton>
    <Navbutton label="portfolio" href="/portfolio"></Navbutton>
</nav>

{@render children()}

<footer>
    <span>&copy; {year}-, emily</span> ∙ <span>avatar by @aqinaaam</span><br>
    <span>made with love, svelte, and one too many late nights</span>
</footer>