import { STRAPI_API, STRAPI_API_TOKEN } from '$env/static/private';
import type { BlogResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

const BLOG_ENDPOINT = `${STRAPI_API}/blogs?populate=categories`;

export const load: PageServerLoad = async ({ fetch }) => {
	const fetchBlogResponse = await fetch(BLOG_ENDPOINT, {
		headers: {
			Authorization: `bearer ${STRAPI_API_TOKEN}`
		}
	});
	const blogsData = (await fetchBlogResponse.json()) as BlogResponse;
	return { ...blogsData };
};
