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

<section>
	<ul class="blogs">
		{#each data.blogs as blog}
			<li class="">
				<a href={`blog/${blog.slug}`} class="title">{blog.title}</a>
				<p class="date">Updated {dayjs(blog.date).fromNow(true)}</p>
				<p class="description">{blog.description}</p>
			</li>
		{/each}
	</ul>
</section>
