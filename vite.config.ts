import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { svelteMarkdown } from '@sveltek/markdown'

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit({
            compilerOptions: {
                // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
                runes: ({ filename }) =>
                    filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
                experimental: {
                    async: true
                }
            },
            adapter: adapter(),
            preprocess: [vitePreprocess({ script: true }), svelteMarkdown({ extensions: ['.svx', '.svelte.md'], layouts: [{ name: 'blog', path: 'src/lib/layout/blog.svelte' }] })],
            extensions: ['.svelte', '.svx', '.svelte.md'],
            alias: {
                'data': 'src/data',
                'components': 'src/components'
            }
        })
    ]
});
