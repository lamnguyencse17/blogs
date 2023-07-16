<script>
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
</script>

<Header />
<main class="flex-grow min-h-full">
	<slot />
</main>
<Footer />
