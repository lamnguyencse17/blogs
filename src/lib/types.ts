type DateMetadata = {
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
};

type ResponseMeta = {
	pagination: {
		page: number;
		pageSize: number;
		pageCount: number;
		totle: number;
	};
};

export type Category = {
	name: string;
	locale: string;
} & DateMetadata;

export type Blog = {
	id: number;
	attributes: {
		title: string;
		slug: string;
		description: string;
		content: string;
		categories: {
			data: Category[];
		};
		locale: string;
	} & DateMetadata;
};

export type BlogResponse = {
	data: Blog[];
	meta: ResponseMeta;
};
