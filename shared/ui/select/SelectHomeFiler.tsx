'use client';

import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';
import { Autocomplete, AutocompleteItem, AutocompleteSection } from '@heroui/react';
import { SelectOption } from '@/shared/types/common';
import { Section } from '@/shared/types/section';
import { POPULAR_SIZE } from '@/widgets/home-filters/model/const';

const popularSize = [ 'width', 'height', 'radius' ];

interface SelectProps {
	name: string;
	label: string;
	isDisabled?: boolean;
	options: SelectOption[] | undefined;
	onChange: (name: string, value: number | string | null, section: Section) => void;
	section: Section;
	className?: string;
}

export function SelectHomeFiler({ name, label, options = [], isDisabled = false, onChange, section, className }: SelectProps) {
	const t = useTranslations('select');
	const popularSizeOptions =
		section === Section.Tires ? popularSize.includes(name) && POPULAR_SIZE[name]
			: section === Section.Battery && name === 'jemnist' && POPULAR_SIZE[name];

	const onSelectionChange = (key: number | string | null) => {
		onChange(name, key, section);
	};

	return <Autocomplete
		size='lg'
		color='default'
		className={ twMerge('max-w-full md:max-w-xs', className) }
		label={ <span className='text-black dark:text-white font-semibold'>{ label }</span> }
		isDisabled={ isDisabled }
		onSelectionChange={ onSelectionChange }
		radius='sm'
		listboxProps={{
			emptyContent: t('no options message'),
		}}
	>
		{ popularSizeOptions ? <>
			<AutocompleteSection classNames={ { heading: 'text-medium font-bold' } } title={ t('popular') }>
				{ popularSizeOptions.map((item) => (
					<AutocompleteItem key={ item.value }>{ item.label }</AutocompleteItem>
				)) }
			</AutocompleteSection>
			<AutocompleteSection classNames={ { heading: 'text-medium font-bold' } } title={ t('all') }>
				{ options.map((item) => (
					<AutocompleteItem key={ item.value }>{ item.label }</AutocompleteItem>
				)) }
			</AutocompleteSection>
		</> : options.map((item) => (
			<AutocompleteItem key={ item.value }>{ item.label }</AutocompleteItem>
		)) }
	</Autocomplete>
}
