<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		display: grid;
		padding: 1rem;
		max-width: 100%;
		margin: 0 auto;
		/* box-sizing: border-box; */
		justify-content: center;
	}

	/* @media (min-width: 640px) {
		main {
			max-width: none;
		}
	}*/
</style>
