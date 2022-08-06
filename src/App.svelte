<script lang="ts">
	// здесь экспорт переменных из ts, можно использовать экспортированные переменные в файле
	// export let name: string;
</script>

<main>
	<div class="menu">
		<h2>Menu</h2>
		<h2>Menu</h2>
		<h2>Menu</h2>
		<h2>Menu</h2>
	</div>
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
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.menu {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	.wrapper {
		display: grid;
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