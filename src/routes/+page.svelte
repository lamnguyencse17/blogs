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

<section class='w-full'>
	<ul class="w-full">
		{#each data.blogs as blog}
			<li class="p-4 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-100 w-full">
				<a href={`blog/${blog.slug}`} class="font-sans text-xl">{blog.title}</a>
				<p class="date">Updated {dayjs(blog.date).fromNow(true)}</p>
				<p class="description">{blog.description}</p>
			</li>
		{/each}
	</ul>
</section>
