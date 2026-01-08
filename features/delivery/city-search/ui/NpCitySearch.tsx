'use client';

import { Autocomplete, AutocompleteItem } from '@heroui/react';
import { useNpCitySearch } from '../model/useNpCitySearch';

export function NpCitySearch() {
	const {
		t,
		data,
		selectedKey,
		cityOptions,
		onSelect,
		onInputChange,
	} = useNpCitySearch();

	if(!data) return null;

	return (
		<Autocomplete
			selectedKey={ selectedKey }
			onInputChange={ onInputChange }
			onSelectionChange={ onSelect }
			label={ t('city') }
			className="max-w-full"
			classNames={ { listboxWrapper: 'rounded-xs' } }
			defaultItems={ cityOptions }
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
