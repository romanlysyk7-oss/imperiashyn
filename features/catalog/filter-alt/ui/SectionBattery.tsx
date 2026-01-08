'use client';

import { useTranslations } from 'next-intl';

import { Section } from '@/shared/types/section';
import { Autocomplete } from '@/features/catalog-filter-autocomplete/ui/Autocomplete';
import { baseDataApi } from '@/entities/base-data/api/baseData.api';

import { SectionTiresProps } from '../model/types';
import { productApi } from '@/entities/products/api/product.api';
import { SelectFromTo } from '@/features/catalog/filter-alt/ui/SelectFromTo';

const section = Section.Battery;

export function SectionBattery({ slug }: SectionTiresProps) {
	const t = useTranslations('filters');
	const { data: dataAkum } = productApi.useFetchDataAkumQuery();
	const value = slug?.find(item => /^b-\d+$/.test(item));
	const number = value ? Number(value.split('-')[1]) : null;
	const { data: manufModels } = baseDataApi.useFetchManufModelsQuery(`${ number }`);

	return (
		<>
			<Autocomplete
				name='jemnist'
				label={ t('capacity') }
				checkboxKey='ct-'
				slug={ slug }
				section={ section }
				options={ dataAkum?.jemnist.map(item => ({ value: item.value, label: item.value, p: item.p })) || [] }
			/>
			<Autocomplete
				name='puskovii_strum'
				label={ t('starting current') }
				checkboxKey='sk-'
				slug={ slug }
				section={ section }
				options={ dataAkum?.['puskovii-strum'].map(item => ({
					value: item.value,
					label: item.value,
					p: item.p
				})) || [] }
			/>
			<Autocomplete
				name='tip_elektrolitu'
				label={ t('type of electrolyte') }
				checkboxKey='elt-'
				slug={ slug }
				section={ section }
				options={ dataAkum?.['tip-elektrolitu'].map(item => ({
					value: item.value,
					label: item.value,
					p: item.p
				})) || [] }
			/>
			<Autocomplete
				name='tip_korpusu'
				label={ t('body type') }
				checkboxKey='tk-'
				slug={ slug }
				section={ section }
				options={ dataAkum?.['tip-korpusu'].map(item => ({ value: item.value, label: item.p, p: item.p })) || [] }
			/>
			<Autocomplete
				name='brand'
				label={ t('brand') }
				checkboxKey='b-'
				slug={ slug }
				section={ section }
				options={ dataAkum?.brand_akum?.map(item => ({ value: item.value, label: item.label })) || [] }
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
			<SelectFromTo name='sirina' idMin='wfrom' idMax='wto' from={ 0 } to={ 600 } title={ `${ t('width') } (см)` }
										btnTitle={ t('to apply') }/>
			<SelectFromTo name='visota' idMin='hfrom' idMax='hto' from={ 0 } to={ 190 } title={ `${ t('height') } (см)` }
										btnTitle={ t('to apply') }/>
			<SelectFromTo name='dovzina' idMin='lngfrom' idMax='lngto' from={ 0 } to={ 600 }
										title={ `${ t('length') } (см)` } btnTitle={ t('to apply') }/>
			<Autocomplete
				name='napruga'
				label={ t('high-voltage') }
				checkboxKey='am-'
				slug={ slug }
				section={ section }
				options={ dataAkum?.napruga.map(item => ({ value: item.value, label: item.value, p: item.p })) || [] }
			/>
			<Autocomplete
				name='poliarnist'
				label={ t('polarity') }
				checkboxKey='pl-'
				slug={ slug }
				section={ section }
				options={ dataAkum?.poliarnist.map(item => ({ value: item.value, label: item.p, p: item.p })) || [] }
			/>
		</>
	);
}
