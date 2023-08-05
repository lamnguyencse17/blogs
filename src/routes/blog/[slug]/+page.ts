import type { Blog } from '$lib/types.js';
import { error } from '@sveltejs/kit';
import type { ComponentType } from 'svelte';

export const load = async ({ params }) => {
	try {
		const blog: { default: ComponentType; metadata: Blog } = await import(
			`../../../blogs/${params.slug}.md`
		);

		return {
			content: blog.default,
			meta: blog.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
};
