<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<div class="mx-auto my-4 flex flex-col items-center justify-center">
	<img {src} {alt} />
	<p class="font-manrope">{alt}</p>
</div>
