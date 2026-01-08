import { useLocale, useTranslations } from 'next-intl';
import { Locale, LocaleCode } from '@/shared/types/locale';
import type { ConfigSettings } from '@/shared/types/settings';

export function useInfoBlock(settingsData: ConfigSettings) {
	const locale = useLocale();
	const t = useTranslations('infoBlock');

	const lang =
		locale === Locale.UK ? LocaleCode.UA : Locale.RU;

	const localizedData = settingsData.locales[lang];

	return {
		t,
		address: localizedData.address || '',
		openHours: localizedData.open || '',
	};
}
