<script lang="ts">
	import dayjs from 'dayjs';
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class='flex flex-col flex-grow'>
	<hgroup class="flex flex-col justify-center items-center">
		<h1 class="font-sans font-bold text-3xl">{data.meta.title}</h1>
		<p>Published at {dayjs(data.meta.date).format('DD/MM/YYYY')}</p>
	</hgroup>

	<div class="flex flex-row-reverse gap-2">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="flex-grow">
		<svelte:component this={data.content} />
	</div>
</article>
