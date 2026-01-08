import { useLocale } from 'next-intl';
import { Locale, LocaleCode } from '@/shared/types/locale';

export const useLanguage = () => {
  const locale = useLocale();
	return locale === Locale.UK ? LocaleCode.UA : Locale.RU;
};
