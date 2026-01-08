import { Locale } from '@/shared/types/locale';

interface Params {
	locale: string;
	countryUk?: string;
	countryRu?: string;
}

export function getCountryByLocale({ locale, countryUk, countryRu }: Params): string | undefined {
	return locale === Locale.UK ? countryUk : countryRu;
}
