# website
my personal website, built with sveltekit.

## making it your own
### EXTREMELY IMPORTANT NOTICE - DO NOT FORGET THIS STEP
a few files contain the following text in a comment:
```
LICENSE EXCEPTION: This file is licensed under the zlib/libpng license with an additional restriction on identity.
See `licenses/zlib-extra-clause.txt` for terms. 
```
for those files, you MUST modify them and remove my names/socials/links prior to publication. you are free to relicense
as pure zlib once you've met the 4th clause, but i would recommend keeping the clause in there and adding your name
to the author's copyright list, just so anyone who uses your code is also disallowed to pretend to be you with your site.

### files and what they contain
- `src/routes/+layout.svelte` contains the copyright footer and the navigation header.
- `src/routes/+page.svelte` contains the introduction blurb and integrates the top 2 cards.
- `src/routes/*/+page.svelte` contain content for the other pages. you'll want to update the little blurbs.
- `src/lib/data/cards.ts` and `src/lib/data/contacts.ts` contain the actual data for contacts and the project cards.
  they're just structured data written in typescript, so you can pretty easily add/remove whatever you like.
- `static/avatar.png` is the favicon for the website. you may also use it to source a profile icon for the title,
  or whatever else you may like.
-  `static/.well-known` contains well-known documents. you should probably delete this and use a reverse proxy to serve
  them from filesystem, rather than from source tree. i keep them in git as a carryover from when this was a pure static
  website served via github pages and i would highly recommend not following my footsteps.
