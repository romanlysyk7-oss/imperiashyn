import { Section } from '@/shared/types/section';
import { mapSeason } from '@/entities/product/model/mappers';
import { FilterParams } from '@/shared/lib/url-filters';

interface Params {
	section: Section;
	params?: FilterParams;
	brandLabel?: string;
	t: (key: string) => string;
}

export function buildCatalogTitle({ section, params, brandLabel, t }: Params): string {
	if(!params) {
		return t(section);
	}

	const season =
		params.sezon && !params.sezon.includes(',')
			? mapSeason(params.sezon)
			: null;

	return [
		season ? t(season) : '',
		t(section),
		brandLabel ?? '',
		params.width
			? `${ params.width }${ params.height ? `/${ params.height }` : '' }`
			: '',
		params.radius ? `R${ params.radius }` : '',
	]
		.filter(Boolean)
		.join(' ');
}
