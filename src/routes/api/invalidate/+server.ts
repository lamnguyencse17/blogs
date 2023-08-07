import { env } from '$env/dynamic/private';
import {
	GITHUB_BRANCH,
	GITHUB_NAME,
	GITHUB_REPO,
	GITHUB_TOKEN,
	GITHUB_WORKFLOW,
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
		`https://api.github.com/repos/${GITHUB_NAME}/${GITHUB_REPO}/actions/workflows/${GITHUB_WORKFLOW}/dispatches`,
		{
			body: JSON.stringify({ ref: GITHUB_BRANCH }),
			method: 'POST',
			headers: {
				Authorization: `Bearer ${GITHUB_TOKEN}`
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
