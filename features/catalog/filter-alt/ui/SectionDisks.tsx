'use client';

import { useLocale, useTranslations } from 'next-intl';

import { Section } from '@/shared/types/section';
import { Autocomplete } from '@/features/catalog-filter-autocomplete/ui/Autocomplete';
import { TYPE_DISK } from '@/features/catalog/filter-alt/model/constants';
import { Locale } from '@/shared/types/locale';
import { baseDataApi } from '@/entities/base-data/api/baseData.api';
import { SelectFromTo } from '@/features/catalog/filter-alt/ui/SelectFromTo';

import { SectionTiresProps } from '../model/types';

const section = Section.Disks;

export function SectionDisks({ filterData, car, slug }: SectionTiresProps) {
	const t = useTranslations('filters');
	const locale = useLocale();
	const { data } = baseDataApi.useFetchBaseDataQuery();
	const value = slug?.find(item => /^b-\d+$/.test(item));
	const number = value ? Number(value.split('-')[1]) : null;
	const { data: manufModels } = baseDataApi.useFetchManufModelsQuery(`${ number }`);

	return (
		<>
			{ !car && <>
				<Autocomplete
					name='width'
					label={ t('width') }
					checkboxKey='w-'
					slug={ slug }
					section={ section }
					options={ filterData?.disc_width?.map(item => ({ value: item.value, label: item.value, p: item.p })) || [] }
				/>
				<Autocomplete
					name='radius'
					label={ t('diameter') }
					checkboxKey='d-'
					slug={ slug }
					section={ section }
					options={ filterData?.disc_diameter?.map(item => ({
						value: item.value,
						label: `R${ item.value }`,
						p: item.p
					})) || [] }
				/>
			</> }
			<Autocomplete
				name='krepeg'
				label={ t('fasteners') }
				checkboxKey='kr-'
				slug={ slug }
				section={ section }
				options={ data?.krip?.map(item => ({ value: item.value, label: item.value, p: item.p })) || [] }
			/>
			<SelectFromTo name='et' idMin='etfrom' idMax='etto' minus={ true } from={ -140 } to={ 500 }
										title={ `ET(${ t('departure') })` } btnTitle={ t('to apply') }/>
			<SelectFromTo name='dia' idMin='diafrom' idMax='diato' from={ 46 } to={ 500 } title='DIA'
										btnTitle={ t('to apply') }/>
			<Autocomplete
				name='typedisk'
				label={ t('type') }
				checkboxKey='td-'
				slug={ slug }
				section={ section }
				options={ TYPE_DISK.map(item => ({
					value: item.value,
					label: locale === Locale.UK ? item.name_ua : item.name
				})) }
			/>
			<Autocomplete
				name='colir'
				label={ t('color') }
				checkboxKey='clr-'
				slug={ slug }
				section={ section }
				options={ data?.colir_abbr?.map(item => ({ value: item.value, label: item.value, p: item.p })) || [] }
			/>
			<Autocomplete
				name='brand'
				label={ t('brand') }
				checkboxKey='b-'
				slug={ slug }
				section={ section }
				options={ data?.brand_disc.map(item => ({ value: item.value, label: item.label })) || [] }
			/>
			{ slug?.find(item => item.startsWith('b-')) && manufModels && <>
				<Autocomplete
					name='model_id'
					label={ t('model') }
					checkboxKey='m-'
					slug={ slug }
					section={ section }
					options={ manufModels?.map(item => ({ value: item.value, label: item.label })) || [] }
				/>
			</> }
		</>
	);
}
