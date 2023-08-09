import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex, escapeSvelte } from 'mdsvex';
import shiki from 'shiki';

import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import remarkSlug from 'remark-slug';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'slack-dark' });
			const html = escapeSvelte(
				shiki.renderToHtml(highlighter.codeToThemedTokens(code, lang), {
					fg: highlighter.getForegroundColor('slack-dark'),
					bg: highlighter.getBackgroundColor('slack-dark'),
					elements: {
						pre: ({ className, style, children }) => {
							return `<pre style="${style}" class="m-4 p-2 ${className}">${children}</pre>`;
						}
					}
				})
			);
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [remarkSlug, remarkUnwrapImages, [remarkToc, { tight: true }]]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
