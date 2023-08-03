<script>
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
</script>

<Header />
<main class="flex flex-grow container px-4 mx-auto">
	<slot />
</main>
<Footer />
