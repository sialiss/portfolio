<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { _, locale } from 'svelte-i18n';

	const currentLocale = locale;
	const t = _;
</script>

<header class="wrapper">
	<div class="top-menu">
		<div class="lang">
			<button class:active={$currentLocale === 'ru'} on:click={() => locale.set('ru')}>RU</button> |
			<button class:active={$currentLocale === 'en'} on:click={() => locale.set('en')}>EN</button>
		</div>
		<div class="contacts">
			{$t('contacts.telegram')} <a href="https://t.me/saphielle">@saphielle</a> |
			<a href="https://github.com/sialiss">{$t('contacts.github')}</a>
		</div>
	</div>
	<nav>
		<ul>
			<li class:active={[base, base + '/'].includes($page.url.pathname)}>
				<a sveltekit:prefetch href="{base}/">{$t('nav.about')}</a>
			</li>
			<li class:active={$page.url.pathname === base + '/frontend'}>
				<a sveltekit:prefetch href="{base}/frontend">{$t('nav.frontend')}</a>
			</li>
			<li class:active={$page.url.pathname === base + '/gamedev'}>
				<a sveltekit:prefetch href="{base}/gamedev">{$t('nav.gamedev')}</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	.top-menu {
		display: flex;
		justify-content: space-between;
		padding: 0.5em;
		font-weight: 100;
	}
	.lang {
		padding: 0;
	}
	.lang button {
		all: unset;
		cursor: pointer;
		color: inherit;
		padding: 0 4px;
		position: relative;
		transition: color 0.2s ease;
	}

	.lang button::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 0%;
		height: 2px;
		background-color: #ff3d3d;
		transition: width 0.2s ease;
	}

	.lang button:hover::after {
		width: 100%;
	}

	.lang button:active {
		transform: scale(0.95);
		opacity: 0.7;
	}

	.lang button.active::after {
		width: 100%;
	}

	.contacts {
		text-align: right;
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
		height: 3.5em;
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
