import { Locale } from '@/shared/types/locale';

export const mapLocalizedOptions = (
	items: { value: string; name: string; name_ua: string }[],
	locale: Locale
) =>
	items.map(item => ({
		value: item.value,
		label: locale === Locale.UK ? item.name_ua : item.name,
	}));
