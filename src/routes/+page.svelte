<script lang="ts">
	import { title } from '$lib/config.js';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(relativeTime);
	export let data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="w-full">
	<ul class="w-full">
		{#each data.blogs as blog}
			<li class="w-full rounded-lg border border-gray-300 bg-white p-4">
				<a href={`blog/${blog.slug}`} class="font-sans text-2xl font-bold hover:text-sky-800"
					>{blog.title}</a
				>
				<p class="mb-2 text-sm">Updated {dayjs(blog.createdAt).fromNow(true)}</p>
				<p class="font-medium text-sky-800">{blog.description}</p>
			</li>
		{/each}
	</ul>
</section>
