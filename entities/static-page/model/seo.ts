import { Locale, LocaleCode } from '@/shared/types/locale';
import { getAliasById } from '@/entities/alias/api/alias.api';

export async function getSeo(locale: Locale, id: string) {
	const lang = locale === Locale.UK ? LocaleCode.UA : Locale.RU;
	const alias = await getAliasById(id);

	return {
		title: alias[id].description[lang].meta_title,
		description: alias[id].description[lang].meta_description,
	};
}