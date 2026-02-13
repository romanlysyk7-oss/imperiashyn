import { Locale, LocaleCode } from '@/shared/types/locale';
import { Section } from '@/shared/types/section';
import { getSettings } from '@/entities/settings/api/settings.api';

function mapSeason(season: string) {
	switch(season) {
		case '1':
			return { ua: "Літні", ru: "Литые"};
		case '2':
			return { ua: "Літні", ru: "Литые"};
		default:
			return { ua: "Літні", ru: "Литые"};
	}
}

function mapSection(section: Section) {
	switch(section) {
		case 'battery':
			return { ua: "Акумулятори", ru: "Аккумуляторы"};
		case 'disks':
			return { ua: "Диски", ru: "Диски"};
		case 'cargo':
			return { ua: "Вантажні", ru: "Грузовые"};
		default:
			return { ua: "Шини", ru: "Шины"};
	}
}

export async function getCatalogSeo(locale: Locale, section: Section, slug?: string[]) {
	const lang = locale === Locale.UK ? LocaleCode.UA : Locale.RU;
	const settings = await getSettings();

	const sItem = slug?.find(item => item.startsWith("s-"));
	const season = sItem ? mapSeason(sItem.split("-")[1])[lang] : '';
	const sectionItem = mapSection(section)[lang];
	const wItem = slug?.find(item => item.startsWith("w-"));
	const hItem = slug?.find(item => item.startsWith("h-"));
	const dItem = slug?.find(item => item.startsWith("d-"));

	const t = `${ season } ${ sItem ? sectionItem.toLowerCase() : sectionItem } ${ wItem ? wItem.split("-")[1] : '' }${ hItem ? wItem ? `/${ hItem.split("-")[1] }` : hItem.split("-")[1] : '' } ${ dItem ? `R${ dItem.split("-")[1] }` : '' }`
	const title = `${ t } - ${ locale === Locale.UK ? 'Купити гуму за найкращою ціною в Україні' : 'Купить резину по лучшей цене в Украине' } | ${settings.ua.config_name}`;

	return {
		title: title,
		description: title,
	};
}
