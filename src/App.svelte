<script lang="ts">
	// здесь экспорт переменных из ts, можно использовать экспортированные переменные в файле
	// export let name: string;
</script>

<main>
	<h1>Camellia</h1>
	<p>Welcome to my portfolio!</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
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