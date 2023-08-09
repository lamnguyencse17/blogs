<script lang="ts">
	export let href: string;
	export let rel: string | undefined = undefined;
</script>

<a class="font-manrope font-black underline hover:text-sky-800" {href} {rel}><slot /></a>
