import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const blog = await import(`../../../blogs/${params.slug}.md`);

		return {
			content: blog.default,
			meta: blog.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
};
