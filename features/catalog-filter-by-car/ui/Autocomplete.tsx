import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Autocomplete as AutocompleteUI, AutocompleteItem } from '@heroui/react';

import type { Options } from '../model/types';

interface SelectProps {
	name: string;
	label: string;
	isDisabled?: boolean;
	setState?: Dispatch<SetStateAction<string | undefined>>;
	options: Options[] | undefined;
	onChange: (name: string, value: number | string | null, label?: number | string | null) => void;
	defaultValue?: string;
	isHomeFilter?: boolean;
}

export function Autocomplete({ name, label, options = [], isDisabled = false, onChange, setState, defaultValue, isHomeFilter }: SelectProps) {
	const t = useTranslations('select');
	const [ selectedKey, setSelectedKey ] = useState<string | number | null>(defaultValue ?? null);

	useEffect(() => {
		setSelectedKey(defaultValue ?? null);
	}, [ defaultValue ]);

	const handleChange = (key: number | string | null) => {
		const label = key ? options.find(i => i.value === key) : { label: '' };
		setSelectedKey(key);
		onChange(name, key, label?.label);
	};

	const handleInputChange = (value: string) => {
		const cleanedText = value.replace(/[^а-яА-ЯіїєґІЇЄҐ' ]/g, '');
		if(setState) setState(cleanedText?.toString());
	};

	return (
		<AutocompleteUI
			size={ isHomeFilter ? 'lg' : "sm" }
			radius="sm"
			selectedKey={ selectedKey }
			onInputChange={ handleInputChange }
			className="max-w-full md:max-w-full"
			classNames={ { listboxWrapper: 'rounded-xs' } }
			label={ isHomeFilter ? <span className='text-black dark:text-white font-semibold'>{ label }</span> : label }
			isDisabled={ isDisabled }
			defaultItems={ options }
			onSelectionChange={ handleChange }
			onClear={ () => handleChange(null) }
			listboxProps={ {
				emptyContent: t('no options message'),
			} }
		>
			{ (item) => <AutocompleteItem key={ item.value }>{ item.label }</AutocompleteItem> }
		</AutocompleteUI>
	);
}
