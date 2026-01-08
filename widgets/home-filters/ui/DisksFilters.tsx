'use client';

import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

import { Section } from '@/shared/types/section';
import { SelectHomeFiler } from '@/shared/ui/select';
import { Button } from '@/shared/ui/button';
import { getFilters } from '@/widgets/home-filters/lib/getFilters';

import { useFilters } from '../model/useFilters';
import { TiresFiltersProps } from '../model/types';

export function DisksFilters({ locale, filters, isAdditionalFilter }: TiresFiltersProps) {
	const t = useTranslations('filters');
	const { onChange, onSubmit, isLoading } = useFilters(Section.Disks);

	if(!filters) return null;

	const filtersDisks = getFilters({
		filters,
		locale,
		section: Section.Disks,
	});

	return (
		<div className={ twMerge("grid gap-2.5 md:mt-7 grid-cols-1 md:grid-cols-3 lg:grid-cols-6", isAdditionalFilter && 'md:grid-cols-6 md:mt-4') }>
			{ filtersDisks.map((item, index) => (
				<SelectHomeFiler
					key={ item.name }
					name={ item.name }
					label={ t(item.label) }
					options={ item.options }
					onChange={ onChange }
					section={ Section.Tires }
					className={ isAdditionalFilter ? (index < 3 ? 'md:col-span-2' : 'md:col-span-3') : undefined }
				/>
			)) }

			<Button
				color="secondary"
				isLoading={ isLoading }
				size="lg"
				radius="sm"
				onPress={ onSubmit }
				className={ twMerge("w-full font-semibold h-16", isAdditionalFilter && 'md:col-span-6 mt-2') }
			>
				{ t('choose') }
			</Button>
		</div>
	);
}
