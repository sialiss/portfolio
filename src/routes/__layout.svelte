<script lang="ts">
	import '$lib/i18n';
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { waitLocale } from 'svelte-i18n';
	import { onMount } from 'svelte';
	let ready = false;

	onMount(async () => {
		await waitLocale();
		ready = true;
	});
</script>

{#if ready}
	<Header />
	<main>
		<slot />
	</main>
{/if}

<style>
	main {
		/* display: grid;
		grid-template-columns: 1fr; */
		padding: 1rem;
		width: 100%;
		/* height: 100%; */
		max-width: 100%;
		max-height: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	/* @media (min-width: 640px) {
		main {
			max-width: none;
		}
	}*/
</style>
