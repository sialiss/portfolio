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
		max-width: 240px;
		margin: 0 auto;
	}

	.wrapper {
		display: grid;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>