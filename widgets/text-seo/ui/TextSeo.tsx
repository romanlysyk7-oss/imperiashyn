import { getSettings } from '@/entities/settings/api/settings.api';
import { Locale, LocaleCode } from '@/shared/types/locale';
import { HtmlContent } from '@/shared/lib/sanitizeHtml';

export async function TextSeo({ locale }: { locale: Locale }) {
	const settings = await getSettings();
	const lang = locale === Locale.UK ? LocaleCode.UA : Locale.RU;

	return (
		<div className='seo-text container mx-auto max-w-7xl mt-20 mb-24 px-2'>
			<HtmlContent htmlString={ settings[lang].description || '' } />
		</div>
	)
}