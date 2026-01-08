import { Section } from '@/shared/types/section';
import { FilterParams } from '@/shared/lib/url-filters';
import { mapSeason } from '@/entities/product/model/mappers';

interface Params {
	section: Section;
	params?: FilterParams;
	brandLabel?: string;
	t: (key: string) => string;
}

export function buildCatalogBreadcrumbs({ section, params, brandLabel, t }: Params) {
	const season = params?.sezon && mapSeason(params.sezon);
	const breadcrumbs = [
		{
			title: t(section),
			href: `/catalog/${ section }/`,
			translations: false,
		},
	];

	if(!params) {
		return breadcrumbs;
	}

	if(params.sezon && season) {
		breadcrumbs.push({
			title: t(season),
			href: `/catalog/${ section }/s-${ params.sezon }`,
			translations: false,
		});
	}

	if(params.brand) {
		breadcrumbs.push({
			title: brandLabel ?? '',
			href: `/catalog/${ section }/b-${ params.brand }`,
			translations: false,
		})
	}

	if(params.width) {
		breadcrumbs.push({
			title: `${ t('width') } ${ params.width }`,
			href: `/catalog/${ section }/w-${ params.width }`,
			translations: false,
		})
	}

	if(params.height) {
		breadcrumbs.push({
			title: `${ t('height') } ${ params.height }`,
			href: `/catalog/${ section }/h-${ params.height }`,
			translations: false,
		})
	}

	if(params.radius) {
		breadcrumbs.push({
			title: `R${ params.radius }`,
			href: `/catalog/${ section }/d-${ params.radius }`,
			translations: false,
		})
	}

	return breadcrumbs;
}
