<script lang="ts">
	import { assets } from "$app/paths";
	import { base } from "$app/paths";
</script>

<h1>My projects</h1>
<div class="wrapper content">
	<a class="cell wrapper" href="{base}/project">
		<img src="{assets}/cards.png" alt="cards">
		<h2>Название</h2>
		<p>Стек</p>
	</a>
	<a class="cell wrapper" href="{base}/project">
		<img src="{assets}/cats.png" alt="cats">
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