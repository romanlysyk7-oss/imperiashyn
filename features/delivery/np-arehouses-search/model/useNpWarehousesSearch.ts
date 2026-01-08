import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { setWirehouse } from '@/entities/delivery/model/delivery.slice';
import { deliveryApi } from '@/entities/delivery/api/delivery.api';
import { Locale } from '@/shared/types/locale';

interface WarehousesOption {
	value: string;
	label: string;
}

export function useNpWarehousesSearch() {
	const locale = useLocale();
	const t = useTranslations('select');
	const dispatch = useAppDispatch();

	const [ selectedKey, setSelectedKey ] = useState<string | number | null>(null);

	const { city } = useAppSelector(state => state.deliveryReducer);
	const { data } = deliveryApi.useFetchNpWarehousesQuery(city.value);

	const warehousesOptions: WarehousesOption[] = data?.map((item: { Description: string, DescriptionRu: string, Ref: string }) => {
		return { value: item.Ref, label: locale === Locale.UK ? item.Description : item.DescriptionRu }
	});

	const onSelect = (key: string | number | null) => {
		const selected = warehousesOptions.find(i => i.value === key);
		setSelectedKey(key);

		if(!selected) return;

		dispatch(
			setWirehouse({
				value: selected.value,
				label: selected.label,
			})
		);
	};

	return {
		t,
		data,
		selectedKey,
		warehousesOptions,
		onSelect,
	};
}
