export type Categories =
	| 'introductory'
	| 'personal thoughts'
	| 'react'
	| 'frontend'
	| 'backend'
	| 'debug'
	| 'tips';

export type BlogStatus = 'published' | 'draft';

export type Blog = {
	title: string;
	slug: string;
	description: string;
	createdAt: string;
	categories: Categories[];
	status: BlogStatus;
};
