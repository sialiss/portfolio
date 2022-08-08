import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.MODE === "development"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		// This is needed for github pages
		paths: {
			base: dev ? '' : '/portfolio',
		},
		prerender: {
			default: true
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null
		}),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
