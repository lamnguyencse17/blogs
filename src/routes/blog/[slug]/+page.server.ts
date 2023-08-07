import { STRAPI_API, STRAPI_API_TOKEN } from '$env/static/private';
import type { BlogResponse } from '$lib/types.js';
import { error } from '@sveltejs/kit';
import * as fs from 'fs/promises';
import path from 'path';

const buildSlugFetchEndpoint = (slug: string) =>
	`${STRAPI_API}/blogs?filters[slug][$eqi]=${slug}&populate=categories`;

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch, params }) => {
	const { slug } = params;
	const fetchBlogResponse = await fetch(buildSlugFetchEndpoint(slug), {
		headers: {
			Authorization: `bearer ${STRAPI_API_TOKEN}`
		}
	});
	const blogsData = (await fetchBlogResponse.json()) as BlogResponse;

	if (blogsData.data.length === 0) {
		throw error(404, `Could not find ${slug}`);
	}

	const blog = blogsData.data[0];
	const targetPath = path.join('src/blogs', `${params.slug}.md`);

	await fs.mkdir(path.dirname(targetPath), { recursive: true });
	await fs.writeFile(targetPath, blog.attributes.content);
	await fs.access(targetPath, fs.constants.R_OK);
	return { ...blog };
};
