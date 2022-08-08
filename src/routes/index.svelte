<script lang="ts">
	// здесь экспорт переменных из ts, можно использовать экспортированные переменные в файле
	import { assets } from "$app/paths";
</script>

<main>
	<div class="wrapper">
		<h1>camellia</h1>
		<p>Welcome to my portfolio!</p>
		<p>Welcome to my portfolio!</p>
		<p>Welcome to my portfolio!</p>
		<p>Welcome to my portfolio!</p>
		<p>Welcome to my portfolio!</p>
		<p>Welcome to my portfolio!</p>
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