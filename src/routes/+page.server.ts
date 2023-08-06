import { STRAPI_API, STRAPI_API_TOKEN } from '$env/static/private';
import type { BlogResponse } from '$lib/types';

const BLOG_ENDPOINT = `${STRAPI_API}/blogs?populate=categories`;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const fetchBlogResponse = await fetch(BLOG_ENDPOINT, {
		headers: {
			Authorization: `bearer ${STRAPI_API_TOKEN}`
		}
	});
	const blogsData = (await fetchBlogResponse.json()) as BlogResponse;
	return { ...blogsData };
}
