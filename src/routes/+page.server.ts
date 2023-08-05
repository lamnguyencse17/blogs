import { STRAPI_API, STRAPI_API_TOKEN } from '$env/static/private';
import type { BlogResponse } from '$lib/types';

const BLOG_ENDPOINT = `${STRAPI_API}/blogs?populate=categories`;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	// const response = await fetch('api/blogs');
	const fetchBlogsRespone = await fetch(BLOG_ENDPOINT, {
		headers: {
			Authorization: `bearer ${STRAPI_API_TOKEN}`
		}
	});
	const blogsData = (await fetchBlogsRespone.json()) as BlogResponse;
	console.log(JSON.stringify(blogsData, null, 2));
	// const blogs: Blog[] = await response.json();
	return { ...blogsData };
}
