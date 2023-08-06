import { error } from '@sveltejs/kit';
import type { ComponentType } from 'svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, params }) => {
	try {
		const parsedComponent: { default: ComponentType } = await import(
			`../../../blogs/${params.slug}.md`
		);
		return { ...data, markdownComponent: parsedComponent.default };
	} catch (e) {
		console.log(e);
		throw error(404, `Could not find ${params.slug}`);
	}
};
