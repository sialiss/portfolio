<script lang="ts">
	import { browser } from '$app/env';
	export const router = browser;
	export const prerender = true;
</script>

<main>
	<div class="wrapper">
		<h1>Frontend</h1>
		<p>Welcome to my portfolio!</p>
	</div>

</main>

<style>
	main {
		text-align: center;
		padding: 1em 0 1em 0;
		max-width: 240px;
		margin: 0 auto;
	}

	.wrapper {
		display: grid;
	}

	h1 {
		color: #ff3d3d;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>