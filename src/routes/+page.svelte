<script lang="ts">
	import { title } from '$lib/config.js';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(relativeTime);
	export let data;
	const { data: blogs } = data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="w-full">
	<ul class="flex w-full flex-col gap-4">
		{#each blogs as blog}
			<li class="w-full rounded-lg border border-gray-300 bg-white p-4">
				<a
					data-sveltekit-preload-data
					href={`blog/${blog.attributes.slug}`}
					class="font-manrope text-2xl font-bold hover:text-sky-800">{blog.attributes.title}</a
				>
				<p class="mb-2 text-sm">Updated {dayjs(blog.attributes.createdAt).fromNow(true)}</p>
				<p class="font-medium text-sky-800">{blog.attributes.description}</p>
			</li>
		{/each}
	</ul>
</section>
