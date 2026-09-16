// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		declare module '*.sxv' {
			import type { Component } from 'svelte'

			declare const MarkdownComponent: Component

			export default MarkdownComponent
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
