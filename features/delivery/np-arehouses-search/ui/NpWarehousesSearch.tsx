'use client';

import { Autocomplete, AutocompleteItem } from '@heroui/react';
import { useNpWarehousesSearch } from '../model/useNpWarehousesSearch';

export function NpWarehousesSearch() {
	const {
		t,
		data,
		selectedKey,
		warehousesOptions,
		onSelect,
	} = useNpWarehousesSearch();

	if(!data) return null;

	return (
		<Autocomplete
			variant='bordered'
			radius="sm"
			selectedKey={ selectedKey }
			onSelectionChange={ onSelect }
			label={ t('department') }
			className="max-w-full"
			classNames={ { listboxWrapper: 'rounded-xs' } }
			defaultItems={ warehousesOptions }
			listboxProps={ {
				emptyContent: t('no options message'),
			} }
		>
			{ (item: { value: string; label: string }) => (
				<AutocompleteItem key={ item.value }>
					{ item.label }
				</AutocompleteItem>
			) }
		</Autocomplete>
	);
}
