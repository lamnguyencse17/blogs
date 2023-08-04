<script>
	import { title } from '$lib/config';
</script>

<header
	class="fixed top-0 flex w-full items-center space-x-8 border border-gray-300 bg-white px-4 py-2"
>
	<a href="/"><h1 class="font-sans text-3xl hover:text-sky-800">{title}</h1></a>
	<nav>
		<ul class="flex flex-row space-x-4">
			<li class="text-md font-sans hover:text-sky-800">
				<a href="https://www.lamnguyencse17.dev/" target="_blank">About me</a>
			</li>
			<li class="text-md font-sans hover:text-sky-800"><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>
