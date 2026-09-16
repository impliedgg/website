---
layout: blog
title: working with markdown in svelte(kit)
description: notes on my creation of the posts system, and the markdown-parsing
  system that allows the posts to work.
date: 2026-09-15
tags: [svelte, sveltekit, markdown]
---
<script lang="ts">
    let count = $state(0);

    import Card from 'components/card.svelte';
</script>

## introduction to the post system

on my website, posts, such as this one, are written with a markdown-based
language called `svx`. it is a combination of svelte and markdown into one file
format. the markdown makes writing articles trivial, but it allows for svelte as
well, so i can add custom components outside of the typical markdown suite,
which lets me integrate other parts of my website or components that i've
written.

as an example, here's a stateful counter, and one of those project cards from
the portfolio / homepage.

<button onclick={()=>count++}>this button</button> has been pressed {count}
time{count==1?"":"s"}

<br />
<br />

<Card
  title="This website's source code"
  description="This card links to this website's source code!"
  url="https://github.com/impliedgg/website"
  language="Svelte"
/>

<br />

## the beginning of the woes.

unfortunately, setting this up was not trivial for multiple reasons.

because of how i want this to work, i dynamically load all of the pages from
`data/pages/*.` and `data/pages.ts` (the latter of which only contains a few
helper functions, an exported page list, and a private "index" that tells the
website what documents to actually show, since we can include markdown pages
inside of markdown pages). this decouples the pages from the filesystem routing
sveltekit defaults to, which just makes it easier to edit the posts from a
traditional markdown editor like obsidian. this means that, unlike most use
cases, i actually need to dynamically declare components at runtime and render
*those* instead of just doing `+page.(svelte.md|svx)`.

for whatever reason, i found at least 4 different implementations of parsing md +
svelte. let's go over my attempts prior to the current setup:

### mdsvex

mdsvex is the "recommended" method for using markdown in svelte. it's available
via `sv add`, so it's what i first reached for. unfortunately, it had a few
issues for me:

1. i couldn't wrangle it to load pages as components. (this is probably a skill
   issue.)
2. it's outdated. svelte gets mad at me for using `svelte:component` whenever it
   renders *anything* as it wasn't built with svelte 5 in mind.

### svem

i found svem while looking for other svelte md parsers via vs code extensions.
it's... really poorly documented. i wasn't able to get it working dynamically
either. i do think this is usable if you're not skill issuing. while looking in
it's issues, i found yet another markdown parser, but i don't think i took note
of it.

### @sveltek/markdown

this is the one i'm currently using. the documentation isn't the most elaborate,
but a few `console.log()`s got me to see where it sends frontmatter and whatnot,
and unlike the other two, i could actually wrangle it.

## current gripes

i have 3 major gripes with this setup:

1. for highlighting, i need to use `jolars.panache` to actually get
   highlighting.
2. visual studio code really does not like associating `svelte.md` to svx
   without some config tweaks.
3. this is probably a skill issue, but whenever i access a post that doesn't
   exist it throws a `await_reactivity_loss` warning. this appears to be
   cosmetic because navigating from a link on that page to another post doesn't
   cause any issues with stateful. navigation. still don't like it's breaking
   something internally, since that means it's potentially unstable in newer
   versions.
