<script lang="ts">
	import { randomColors } from './constants.js';
	const generateRandomColor = () => randomColors[Math.floor(Math.random() * randomColors.length)];
	import dayjs from 'dayjs';
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="flex flex-grow flex-col rounded-lg border border-gray-300 bg-white px-2 py-8">
	<hgroup class="flex flex-col items-center justify-center px-4">
		<h1 class="font-sans text-3xl font-bold">{data.meta.title}</h1>
		<p>Published at {dayjs(data.meta.date).format('DD/MM/YYYY')}</p>
	</hgroup>

	<div class="flex flex-row-reverse gap-2 px-4">
		{#each data.meta.categories as category}
			<span class={`hover:${generateRandomColor()} cursor-pointer`}>&num;{category}</span>
		{/each}
	</div>

	<div class="flex-grow">
		<svelte:component this={data.content} />
	</div>
</article>
