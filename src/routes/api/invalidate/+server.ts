import { env } from '$env/dynamic/private';
import {
	GH_BRANCH,
	GH_NAME,
	GH_REPO,
	GH_TOKEN,
	GH_WORKFLOW,
	SECRET_FIELD
} from '$env/static/private';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request }) => {
	const headers = request.headers;
	const secret = headers.get(SECRET_FIELD);
	if (secret !== env.INVALIDATE_SECRET) {
		return json({ status: 403 });
	}
	const triggerRebuild = await fetch(
		`https://api.github.com/repos/${GH_NAME}/${GH_REPO}/actions/workflows/${GH_WORKFLOW}/dispatches`,
		{
			body: JSON.stringify({ ref: GH_BRANCH }),
			method: 'POST',
			headers: {
				Authorization: `Bearer ${GH_TOKEN}`
			}
		}
	);
	if (!triggerRebuild.ok) {
		const errorResponse = await triggerRebuild.json();
		console.log(errorResponse);
		return json({ status: 500 });
	}
	return json({
		status: 204
	});
};
