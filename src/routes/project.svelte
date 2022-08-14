<script lang="ts">
    import { onMount } from 'svelte';
    import { projects as projects_frontend } from "$lib/projects/frontend";
    import { projects as projects_gamedev } from "$lib/projects/gamedev";

    const all_projects = new Map([
        ["frontend", projects_frontend],
        ["gamedev", projects_gamedev]
    ])

    let current_project: { project?: string; name?: string; preview?: string; link?: string; stack?: string; iframe_link?: string; about?: string; github?: string; }

    onMount(async () => {
		let params = (new URL(document.location.toString())).searchParams;
        let id = params.get('id');
        let list = params.get('list');
        if (id && list) {
            all_projects.get(list)?.map(project => {if (project.id === id) current_project = project})}
        }
	);
</script>

<div class="main wrapper">
    {#if current_project}
        <div class="frame">
            <iframe
                title="project"
                src="{current_project["iframe_link"]}">
            </iframe>
        </div>
        <div class="about">
            <h1>{current_project["name"]}</h1>
            <div class="flex">
                <a href="{current_project["github"]}">GitHub</a>
                <p>| {current_project["stack"]}</p>
            </div>
            <p>{current_project["about"]}</p>
        </div>
    {/if}
</div>

<style>
    iframe {
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