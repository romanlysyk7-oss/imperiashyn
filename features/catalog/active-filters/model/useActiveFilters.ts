'use client';

import { useTranslations } from 'next-intl';

import { Section } from '@/shared/types/section';
import { baseDataApi } from '@/entities/base-data/api/baseData.api';
import { productApi } from '@/entities/products/api/product.api';
import { getSeasonLabel } from '@/entities/filters/lib/seasonLabel';
import { getVehicleTypeLabel } from '@/entities/filters/lib/vehicleTypeLabel';
import { getBrandLabel } from '@/entities/filters/lib/brandLabel';
import { getStudLabel } from '@/entities/filters/lib/studLabel';

export function useActiveFilters(section: Section) {
	const t = useTranslations('filters');

	const { data } = baseDataApi.useFetchBaseDataQuery();
	const { data: dataAkum } = productApi.useFetchDataAkumQuery();
	// const { data: manufModels } = baseDataApi.useFetchManufModelsQuery('');

	const resolveLabel = (key: string, value: string) => {
		switch(key) {
			case 's':
				return getSeasonLabel(value, t);
			case 'vt':
				return getVehicleTypeLabel(value, t);
			case 'b':
				return getBrandLabel(value, section, data, dataAkum) || value;
			case 'd':
				return `R${ value }`;
			case 'stud':
				return getStudLabel(value, t);
			// case 'm':
			// 	return manufModels?.find(m => m.value === +value)?.label || value;
			default:
				return value;
		}
	};

	return { resolveLabel };
}
