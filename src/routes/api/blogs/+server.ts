import { json } from '@sveltejs/kit';
import type { Blog } from '$lib/types';
import { PUBLISHED_STATUS } from '$lib/constants';

export const _getBlogs = async () => {
	let blogs: Blog[] = [];

	const paths = import.meta.glob('/src/blogs/*.md', { eager: false });

	await Promise.all(
		Object.keys(paths).map(async (path) => {
			const file = await paths[path]();
			const slug = path.split('/').at(-1)?.replace('.md', '');

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata as Omit<Blog, 'slug'>;
				const blog = { ...metadata, slug } satisfies Blog;
				blog.status === PUBLISHED_STATUS && blogs.push(blog);
			}
		})
	);

	blogs = blogs.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return blogs;
};

export const GET = async () => {
	const blogs = await _getBlogs();
	return json(blogs);
};
