<script lang="ts">
	import { assets } from '$app/paths';
	import { _, locale } from 'svelte-i18n';
	const t = _;
	locale.subscribe((value) => ($locale = value));
</script>

<h1>{$t('about.title')}</h1>
<div class="wrapper about">
	<img src="{assets}/images/me4.jpg" alt="me" height="450px" />
	<div class="text-justify vertical-center">
		<p class="text-center">{$t('about.welcome')}</p>
		<p>{$t('about.intro')}</p>
		<p>{$t('about.stack')}</p>
		<p>{$t('about.explore')}</p>
		<p class="text-center">{$t('about.thanks')}</p>
		<p class="contacts text-center">
			{$t('about.contacts')}<br />
			<a href="https://t.me/saphielle">Telegram</a> |
			<a href="https://github.com/sialiss">GitHub</a><br />
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
