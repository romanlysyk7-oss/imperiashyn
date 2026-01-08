import { useEffect, useState } from 'react';
import { Section } from '@/shared/types/section';
import { useRouter } from '@/shared/i18n/navigation';
import { useAppDispatch } from '@/shared/hooks/redux';
import { setProgress } from '@/widgets/header/store/progressSlice';
import { baseDataApi } from '@/entities/base-data/api/baseData.api';
import { autoDataApi } from '../api/auto-data.api';

import { parseCarSlug } from '../lib/parseCarSlug';
import { CarFilters } from './types';

export function useByCar(car: string | null, section: Section) {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [filter, setFilter] = useState<CarFilters>({ brand: 0, model: 0, year: 0, modification: 0, });
	const { data: auto } = baseDataApi.useFetchBaseDataQuery();
	const { data: model, refetch: refetchModel } = autoDataApi.useFetchAutoModelQuery(`${filter.brand}`, { skip: !filter.brand });
	const { data: year } = autoDataApi.useFetchAutoYearQuery(`${filter.model}`, { skip: !filter.model });
	const { data: kit, refetch: refetchKit } =
		autoDataApi.useFetchAutoModelKitQuery(
			`${filter.model}/${filter.year}`,
			{ skip: !filter.model || !filter.year }
		);

	useEffect(() => {
		setFilter(parseCarSlug(car));
	}, [car]);

	const onChange = (name: keyof CarFilters, value: number) => {
		setFilter(prev => ({ ...prev, [name]: value }));

		if (name === 'model') refetchModel();
		if (name === 'year' || name === 'modification') refetchKit();
	};

	const submit = () => {
		const brandLabel = auto?.auto.find(item => item.value === filter.brand)?.label.toLowerCase() ?? '';

		dispatch(setProgress(true));
		router.push(`/catalog/${section}/car-${ brandLabel }-${ filter.year }-${ filter.brand }-${ filter.model }-${ filter.modification }`);
	};

	return {
		filter,
		auto,
		model,
		year,
		kit,
		modification: filter.modification,
		onChange,
		submit,
	};
}
