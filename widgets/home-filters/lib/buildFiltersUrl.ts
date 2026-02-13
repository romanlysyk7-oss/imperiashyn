import { generateFiltersUrl } from '@/shared/lib/url-filters';
import { Section } from '@/shared/types/section';

export function buildFiltersUrl(
	filter: Record<string, string | number>,
	section: Section
) {
	const searchUrl = generateFiltersUrl(filter);
	return `/catalog/${ section }/${ searchUrl }`;
}
