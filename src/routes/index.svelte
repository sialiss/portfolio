<script lang="ts">
	// здесь экспорт переменных из ts, можно использовать экспортированные переменные в файле
	import { assets } from "$app/paths";
</script>

<div class="wrapper">
	<h1>camellia</h1>
	<div class="wrapper about">
		<p>Welcome to my portfolio!</p>
		<p>Welcome to my portfolio!</p>
		<p>Welcome to my portfolio!</p>
		<p>Welcome to my portfolio!</p>
		<p>Welcome to my portfolio!</p>
		<p>Welcome to my portfolio!</p>
		<p>Welcome to my portfolio!</p>
	</div>
</div>

<style>
	.about {
		grid-template-columns: repeat(2, 1fr);
	}
</style>