<script lang="ts">
	import { assets, base } from '$app/paths';
	import { projects } from '$lib/projects/gamedev';
	import { locale, _ } from 'svelte-i18n';

	const t = _;
	locale.subscribe((value) => ($locale = value));
</script>

<h1>{$t('gamedev.title')}</h1>
<div class="wrapper content">
	{#each projects as project}
		<a class="cell wrapper" href="{base}/project?id={project.id}&list=gamedev">
			<img src="{assets}{project.preview}" alt="project preview" />
			<h2>{project.name}</h2>
			<p>{project.stack}</p>
		</a>
	{/each}
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
