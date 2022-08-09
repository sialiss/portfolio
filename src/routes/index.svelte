<script lang="ts">
	// здесь экспорт переменных из ts, можно использовать экспортированные переменные в файле
	import { assets } from "$app/paths";
</script>

<div class="wrapper">
	<h1>camellia</h1>
	<div class="wrapper about">
		<img src="{assets}/me1.jpg" alt="me" height="450px">
		<div class="text-justify">
			<p class="text-center">Welcome to my portfolio!</p>
			<p>
				My name is Sveta, I'm a student and a web development fan ヽ(・∀・)ﾉ
				Also I am interested in gamedev, so I have some projects in it too.
			</p>
			<p>
				My stack is a JavaScript, TypeScript, React and Svelte (this site is made in Svelte and has a React version, for example).
				I love frontend and am learning different things now.
			</p>
			<p>
				In this site you can find my projects. Also you can touch it and read about projects, stack or something else.
				And there is a link to the github!
			</p>
			<p class="text-center">
				Thank you ♡
			</p>
		</div>
	</div>
</div>

<style>
	.about {
		grid-template-columns: repeat(2, 1fr);
	}

	img {
		justify-self: center;
	}
</style>