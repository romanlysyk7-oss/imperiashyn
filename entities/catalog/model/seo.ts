import { Locale, LocaleCode } from '@/shared/types/locale';
import { Section } from '@/shared/types/section';
import { getSettings } from '@/entities/settings/api/settings.api';

export async function getCatalogSeo(locale: Locale, section: Section, slug?: string[]) {
	const lang = locale === Locale.UK ? LocaleCode.UA : Locale.RU;
	const settings = await getSettings();

	if (slug) {
		return {
			title: settings[lang].meta_title,
			description: settings[lang].meta_description,
		};
	}

	return {
		title: settings[lang].meta_title,
		description: settings[lang].meta_description,
	};
}
