<script>
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
</script>

<Header />
<main class="flex flex-grow px-4">
	<slot />
</main>
<Footer />
