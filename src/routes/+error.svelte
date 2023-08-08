<script>
	import { page } from '$app/stores';
	import dino from '$lib/assets/dino.svg';
	let status = $page.status;
	const notFoundMessage = 'Hmm... I think we are lost. Come back later!';
	const internalErrorMessage = 'Oops! Something went wrong. Please spam refresh a few times!';
</script>

<div class="mb-32 flex w-full flex-col items-center justify-center">
	<h1>
		{#if status === 404}
			{notFoundMessage}
		{:else}
			{internalErrorMessage}
		{/if}
	</h1>
	<img alt="error" src={dino} />
</div>
