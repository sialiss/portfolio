<script lang="ts">
	import { assets } from "$app/paths";
	import { base } from "$app/paths";

	// async function start() {
	// 	const data = await fetch("{assets}/data/frontend.json").then(res => res.json())
	// }

	// start()
</script>

<h1>My projects</h1>
<div class="wrapper content">
	<a class="cell wrapper" href="{base}/project">
		<img src="{assets}/images/cards.png" alt="cards">
		<h2>Название</h2>
		<p>Стек</p>
	</a>
	<a class="cell wrapper" href="{base}/project">
		<img src="{assets}/images/cats.png" alt="cats">
		<h2>Название</h2>
		<p>Стек</p>
	</a>
</div>

<style>
	.content {
		grid-template-columns: repeat(2, 1fr);
	}

	.cell {
		justify-self: center;
		text-align: center;
		padding: 5px;
		max-width: 100%;
	}

	img {
		justify-self: center;
		max-width: 90%;
	}
</style>