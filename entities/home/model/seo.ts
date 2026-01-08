import { Locale, LocaleCode } from '@/shared/types/locale';
import { getSettings } from '@/entities/settings/api/settings.api';

export async function getHomeSeo(locale: Locale) {
	const lang = locale === Locale.UK ? LocaleCode.UA : Locale.RU;
	const settings = await getSettings();

	return {
		title: settings[lang].meta_title,
		description: settings[lang].meta_description,
	};
}
