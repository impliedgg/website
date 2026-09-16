<script>
	import './layout.css';
	import NavButton from "components/nav-button.svelte";

	let { children } = $props();
	let year = new Date().getFullYear();
</script>

<!-- 
    LICENSE EXCEPTION: This file is licensed under the zlib/libpng license with an additional restriction on identity.
    See `licenses/zlib-extra-clause.txt` for terms. 
-->

<nav>
	<NavButton label="home" href="/" />
	<NavButton label="contacts" href="/contacts" />
	<NavButton label="portfolio" href="/portfolio" />
	<NavButton label="posts" href="/posts" method="prefix"/>
</nav>

<main>{@render children()}</main>

<footer>
	<div>
		<span>© {year}-, emily</span>
		∙ 

		<span>
			avatar from 

			<a
				href="https://x.com/Rialickpero/status/1604229557225390080"
			>@rialickpero</a>

			<sup
				title="the avatar is cropped and grayscale, originally found on pinterest."
				style="text-decoration: underline dashed;"
			>?</sup>
		</span>

		<br />
		<span>made with love, svelte, and one too many late nights</span>
	</div>
</footer>

<style>
	@reference 'layout.css';

	:root {
		
		@apply min-w-[50%] max-w-160;
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
		padding-top: 2rem;
	}

	footer div {
		width: 100%;
		border-top: 0.01rem solid var(--layer-10);
		position: relative;
	}
</style>
