import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useAppDispatch } from '@/shared/hooks/redux';
import { setCity } from '@/entities/delivery/model/delivery.slice';
import { deliveryApi } from '@/entities/delivery/api/delivery.api';

interface CityOption {
	value: string;
	label: string;
}

export function useNpCitySearch() {
	const t = useTranslations('select');
	const dispatch = useAppDispatch();

	const [ selectedKey, setSelectedKey ] = useState<string | number | null>(null);
	const [ query, setQuery ] = useState('');

	const { data } = deliveryApi.useFetchNpAllCityQuery(query);

	const cityOptions: CityOption[] =
		data?.original?.[0]?.Addresses?.map(
			(item: { Ref: string; MainDescription: string }) => ({
				value: item.Ref,
				label: item.MainDescription,
			})
		) ?? [];

	const onSelect = (key: string | number | null) => {
		const selected = cityOptions.find(i => i.value === key);
		setSelectedKey(key);

		if(!selected) return;

		dispatch(
			setCity({
				value: selected.value,
				label: selected.label,
			})
		);
	};

	const onInputChange = (value: string) => {
		const cleaned = value.replace(/[^а-яА-ЯіїєґІЇЄҐ' ]/g, '');
		setQuery(cleaned);
	};

	return {
		t,
		data,
		selectedKey,
		cityOptions,
		onSelect,
		onInputChange,
	};
}
