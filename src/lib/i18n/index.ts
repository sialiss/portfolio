import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('ru', () => import('./ru.json'));

if (typeof window !== 'undefined') {
	const savedLocale = localStorage.getItem('lang') ?? getLocaleFromNavigator();

	init({
		fallbackLocale: 'en',
		initialLocale: savedLocale
	});

	locale.subscribe((val) => {
		if (val) localStorage.setItem('lang', val);
	});
}
