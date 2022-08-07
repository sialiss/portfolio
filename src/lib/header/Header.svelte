<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="contacts">
        telegram <a href="https://t.me/saphielle">@saphielle</a> | camellia.sialiss@gmail.com
    </div>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">About me</a></li>
			<li class:active={$page.url.pathname === './frontend'}>
				<a sveltekit:prefetch href="./frontend">frontend</a>
			</li>
			<li class:active={$page.url.pathname === './gamedev'}>
				<a sveltekit:prefetch href="./gamedev">gamedev</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: grid;
	}

	.contacts {
        text-align: right;
        padding: 0.7em;
		font-weight: 100;
        /* padding-top: 0; */
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
		/* padding: 0 1em; */
		color: var(--heading-color);
		font-weight: 100;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.3s linear;
		transition: background-color 0.3s linear;
		color: #ff3d3d;
	}

	a:hover {
		background-color: #ff3d3d;
		color: black;
	}
</style>
