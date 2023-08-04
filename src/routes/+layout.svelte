<script>
	import '../app.css';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
</script>

<div class="flex min-h-screen w-full flex-col bg-gray-100">
	<Header />
	<main class="container mx-auto mt-20 flex flex-grow px-4">
		<slot />
	</main>
	<Footer />
</div>
