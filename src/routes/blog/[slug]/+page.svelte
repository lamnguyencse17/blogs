<script lang="ts">
	import { randomColors } from './constants.js';
	const generateRandomColor = () => randomColors[Math.floor(Math.random() * randomColors.length)];
	import dayjs from 'dayjs';
	export let data;
	const categories = data.attributes.categories.data.map((category) => category.attributes.name);
</script>

<svelte:head>
	<title>{data.attributes.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.attributes.title} />
</svelte:head>

<article class="flex flex-grow flex-col rounded-lg border border-gray-300 bg-white px-2 py-8">
	<hgroup class="flex flex-col items-center justify-center px-4">
		<h1 class="font-manrope text-3xl font-bold">{data.attributes.title}</h1>
		<p>Published at {dayjs(data.attributes.createdAt).format('DD/MM/YYYY')}</p>
	</hgroup>

	<div class="flex flex-row-reverse gap-2 px-4">
		{#each categories as category}
			<span class={`hover:${generateRandomColor()} cursor-pointer`}>&num;{category}</span>
		{/each}
	</div>

	<div class="flex-grow">
		<svelte:component this={data.markdownComponent} />
	</div>
</article>
