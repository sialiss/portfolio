<script lang="ts">
	// здесь экспорт переменных из ts, можно использовать экспортированные переменные в файле
	import { assets } from "$app/paths";
	import { text } from "svelte/internal";
</script>

<h1>camellia</h1>
<div class="wrapper about">
	<img src="{assets}/images/me4.jpg" alt="me" height="450px">
	<div class="text-justify vertical-center">
		<p class="text-center">Welcome to my portfolio!</p>
		<p>
			My name is Sveta, I'm a web development fan ヽ(・∀・)ﾉ  
			Also I love gamedev, so I have some projects in it too.
		</p>
		<p>
			My stack is a JavaScript, TypeScript and Vue. I'm also interested in Svetle and React.
			I also study a little python and C/C++ at the university, but that's another story.
		</p>
		<p>
			In this site you can find my projects. You can touch it and read about projects, stack or something else.
			And there is a link to the github!
		</p>
		<p class="text-center">
			Thank you ♡
		</p>
		<p class="contacts text-center">
			Contacts:<br>
			<a href="https://t.me/saphielle">Telegram</a> | <a href="https://github.com/sialiss">GitHub</a><br>
		</p>
	</div>
</div>

<style>
	.about {
		max-width: 1024px;
		grid-template-columns: repeat(2, 1fr);
		margin: auto;
	}

	img {
		justify-self: center;
	}

	.contacts {
		padding-top: 50px;
	}
</style>