import { generateFiltersUrl } from '@/shared/lib/url-filters';
import { Section } from '@/shared/types/section';

export function buildFiltersUrl(
	filter: Record<string, string | number>,
	locale: string,
	section: Section
) {
	const searchUrl = generateFiltersUrl(filter);
	return `/${ locale }/catalog/${ section }/${ searchUrl }`;
}
