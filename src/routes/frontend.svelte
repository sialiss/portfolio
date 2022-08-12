<script lang="ts">
	import { assets } from "$app/paths";
	import { base } from "$app/paths";
	import { projects } from "$lib/projects/frontend";

</script>

<h1>My projects</h1>
<div class="wrapper content">
	<a class="cell wrapper" href="{base}{projects[0]["link"]}">
		<img src="{assets}{projects[0]["preview"]}" alt="cards">
		<h2>{projects[0]["name"]}</h2>
		<p>{projects[0]["stack"]}</p>
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