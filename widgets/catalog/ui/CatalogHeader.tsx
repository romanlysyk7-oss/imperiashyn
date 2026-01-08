'use client';

import { useTranslations } from 'next-intl';

import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Title } from '@/shared/ui/title';
import { parseFiltersUrl } from '@/shared/lib/url-filters';
import { baseDataApi } from '@/entities/base-data/api/baseData.api';

import { CatalogHeaderParams } from '../model/types';
import { buildCatalogTitle } from '../lib/buildCatalogTitle';
import { buildCatalogBreadcrumbs } from '../lib/buildCatalogBreadcrumbs';
import { Section } from '@/shared/types/section';

export function CatalogHeader({ section, slug }: CatalogHeaderParams) {
	const { data } = baseDataApi.useFetchBaseDataQuery();
	const t = useTranslations('filters');
	const params = slug ? parseFiltersUrl(slug.join('/')) : undefined;
	let brandLabel: string | undefined;

	if (params?.brand && data) {
		const brandId = Number(params.brand);

		brandLabel =
			section === Section.Tires
				? data.brand.find(b => b.value === brandId)?.label
				: section === Section.Disks
					? data.brand_disc.find(b => b.value === brandId)?.label
					: undefined;
	}

	const title = buildCatalogTitle({ section, params, brandLabel, t });
	const breadcrumbs = buildCatalogBreadcrumbs({ section, params, brandLabel, t });

	return (
		<>
			<Breadcrumbs path={ breadcrumbs }/>
			<Title
				isMain
				title={ title }
				className="mt-3 text-lg font-medium px-0 md:text-lg md:px-3 mb-3 md:mb-1"
			/>
		</>
	);
}
