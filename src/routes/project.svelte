<script lang="ts">
	import { onMount } from 'svelte';
	import { projects as projects_frontend } from '$lib/projects/frontend';
	import { projects as projects_gamedev } from '$lib/projects/gamedev';
	import { locale, _ } from 'svelte-i18n';

	const all_projects = new Map([
		['frontend', projects_frontend],
		['gamedev', projects_gamedev]
	]);

	let current_project: {
		project?: string;
		name?: string;
		preview?: string;
		width?: string;
		height?: string;
		link?: string;
		stack?: string;
		embed_link?: string;
		about_en?: string;
		about_ru?: string;
		github?: string;
	};
	locale.subscribe((value) => ($locale = value));
	const t = _;
	onMount(async () => {
		let params = new URL(document.location.toString()).searchParams;
		let id = params.get('id');
		let list = params.get('list');
		if (id && list)
			all_projects.get(list)?.map((project) => {
				if (project.id === id) current_project = project;
			});
		if (list != 'gamedev') current_project['embed_link'] = current_project['link'];
	});
</script>

{#if current_project}
	<div class="main wrapper">
		<div class="frame">
			<iframe id="iframe" class="iframe" title="project" src={current_project.embed_link} />
		</div>
		<div class="about text-justify">
			<h1>{current_project.name}</h1>
			<div class="flex">
				<a href={current_project.github}>{$t('projects.github')}</a>
				<p>| {current_project.stack}</p>
				|<a href={current_project.link}>{$t('projects.site')}</a>
			</div>
			<p>
				{#if $locale === 'ru'}
					{current_project.about_ru ?? current_project.about_en}
				{:else}
					{current_project.about_en}
				{/if}
			</p>
		</div>
	</div>
{/if}

<style>
	.iframe {
		border: 0;
		width: 100%;
		height: 100%;
	}

	.main {
		width: 100%;
		height: 100%;
		grid-template-columns: 3fr 1fr;
	}

	.frame {
		max-width: 100%;
		width: 100%;
	}

	.about {
		padding: 20px;
	}

	.flex {
		display: flex;
		gap: 5px;
	}

	/* @media {

    } */
</style>
