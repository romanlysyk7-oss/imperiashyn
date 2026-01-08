'use client';

import { useTranslations } from 'next-intl';
import { Section } from '@/shared/types/section';
import { Button } from '@/shared/ui/button';
import { Autocomplete } from './Autocomplete';

import { useByCar } from '../model/useByCar';
import { twMerge } from 'tailwind-merge';

interface Props {
	car: string | null;
	section: Section;
	isHomeFilter?: boolean;
	isAdditionalFilter?: boolean;
}

export function ByCar({ car, section, isHomeFilter, isAdditionalFilter }: Props) {
	const t = useTranslations('filters');
	const { filter, auto, model, year, kit, modification, onChange, submit } = useByCar(car, section);

	return (
		<>
			<Autocomplete
				name="brand"
				label={ t('car brand') }
				options={ auto?.auto }
				isHomeFilter={ isHomeFilter }
				defaultValue={ filter.brand.toString() || '' }
				onChange={ (_, v) => onChange('brand', Number(v)) }
			/>

			<Autocomplete
				name="model"
				label={ t('model') }
				options={ model }
				isHomeFilter={ isHomeFilter }
				isDisabled={ !model?.length }
				defaultValue={ filter.model.toString() || '' }
				onChange={ (_, v) => onChange('model', Number(v)) }
			/>

			<Autocomplete
				name="year"
				label={ t('graduation year') }
				options={ year?.map(v => ({ value: v, label: String(v) })) }
				isHomeFilter={ isHomeFilter }
				isDisabled={ !year?.length }
				defaultValue={ filter.year.toString() || '' }
				onChange={ (_, v) => onChange('year', Number(v)) }
			/>

			<Autocomplete
				name="modification"
				label={ t('modification') }
				options={ kit }
				isHomeFilter={ isHomeFilter }
				isDisabled={ !kit?.length }
				defaultValue={ filter.modification.toString() || '' }
				onChange={ (_, v) => onChange('modification', Number(v)) }
			/>

			<Button
				onPress={ submit }
				size={ isHomeFilter ? 'lg' : 'md' }
				color={ isHomeFilter ? 'secondary' : 'primary' }
				isDisabled={ modification === 0 }
				className={ twMerge('w-full',  isHomeFilter ? "font-semibold h-16" : "mt-2 uppercase", isAdditionalFilter && 'md:col-span-2 mt-2') }
			>
				{ t('choose') }
			</Button>
		</>
	);
}
