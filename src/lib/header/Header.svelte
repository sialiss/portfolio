<script lang="ts">
	import { page } from '$app/stores';
	import { base } from "$app/paths";
</script>

<header class="wrapper">
	<div class="contacts">
        telegram <a href="https://t.me/saphielle">@saphielle</a> | <a href="https://github.com/sialiss">github</a>
    </div>
	<nav>
		<ul>
			<li class:active={[base, base+"/"].includes($page.url.pathname)}><a sveltekit:prefetch href="{base}/">About me</a></li>
			<li class:active={$page.url.pathname === base+'/frontend'}>
				<a sveltekit:prefetch href="{base}/frontend">frontend</a>
			</li>
			<li class:active={$page.url.pathname === base+'/gamedev'}>
				<a sveltekit:prefetch href="{base}/gamedev">gamedev</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	.contacts {
        text-align: right;
        padding: 0.7em;
		font-weight: 100;
    }

	nav {
		font-size: 1.3em;
		width: 100%;
		display: block;
		justify-content: center;
        border-top: 2px solid #ff3d3d;
        border-bottom: 2px solid #ff3d3d;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		position: relative;
		padding: 0;
		height: 4em;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		margin-top: -2px;
        margin-bottom: -2px;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 10px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		font-size: 1.5em;
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}
</style>
