'use client';

import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';
import { Autocomplete as AutocompleteUI, AutocompleteItem, AutocompleteSection, } from '@heroui/react';

import { useRouter } from '@/shared/i18n/navigation';
import { SelectOption } from '@/shared/types/common';
import { Section } from '@/shared/types/section';

import { useAutocomplete } from '../model/useAutocomplete';
import { createHref } from '../lib/createHref';

interface Props {
	name: string;
	label: string;
	options?: SelectOption[];
	section: Section;
	checkboxKey: string;
	slug?: string[];
}

export function Autocomplete({ name, label, options = [], section, checkboxKey, slug }: Props) {
	const router = useRouter();
	const t = useTranslations('select');

	const {
		loading,
		setLoading,
		filteredSlug,
		defaultValue,
		popularOptions,
	} = useAutocomplete({
		slug,
		checkboxKey,
		name,
		section,
	});

	return (
		<AutocompleteUI
			variant="flat"
			size="sm"
			defaultSelectedKey={ defaultValue }
			isLoading={ loading }
			onClear={ () => router.push(createHref({
				section,
				checkboxKey,
				value: defaultValue,
				filteredSlug,
				clear: true,
			})) }
			onSelectionChange={ () => setLoading(true) }
			className={ twMerge('max-w-full md:max-w-xs') }
			label={ <span className="font-semibold">{ label }</span> }
			listboxProps={ { emptyContent: t('no options message') } }
		>
			{ popularOptions ? (
				<>
					<AutocompleteSection title={ t('popular') }>
						{ popularOptions.map(item => (
							<AutocompleteItem
								key={ item.value }
								onPress={ () => router.push(createHref({
									section,
									checkboxKey,
									value: item.value,
									filteredSlug,
								})) }
							>
								{ item.label }
							</AutocompleteItem>
						)) }
					</AutocompleteSection>

					<AutocompleteSection title={ t('all') }>
						{ options.map(item => (
							<AutocompleteItem
								key={ item.value }
								onPress={ () => router.push(createHref({
									section,
									checkboxKey,
									value: `${item.value}`,
									filteredSlug,
								})) }
							>
								{ item.label }
							</AutocompleteItem>
						)) }
					</AutocompleteSection>
				</>
			) : (
				options.map(item => (
					<AutocompleteItem
						key={ item.value }
						onPress={ () => router.push(createHref({
							section,
							checkboxKey,
							value: `${item.value}`,
							filteredSlug,
						})) }
					>
						{ item.label }
					</AutocompleteItem>
				))
			) }
		</AutocompleteUI>
	);
}
