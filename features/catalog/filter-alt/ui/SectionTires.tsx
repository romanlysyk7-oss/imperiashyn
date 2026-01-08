'use client';

import { useLocale, useTranslations } from 'next-intl';

import { Section } from '@/shared/types/section';
import { Autocomplete } from '@/features/catalog-filter-autocomplete/ui/Autocomplete';
import {
	APPOINTMENT_CARGO,
	APPOINTMENT_INDUSTRIAL,
	TIRE_SEASON,
	TIRE_WINTER_SEASON
} from '@/features/catalog/filter-alt/model/constants';
import { Locale } from '@/shared/types/locale';
import { baseDataApi } from '@/entities/base-data/api/baseData.api';

import { SectionTiresProps } from '../model/types';

const section = Section.Tires;
const CARGO = ['vt-3', 'vt-4', 'vt-5', 'vt-6'];
const SPECIAL_EQUIPMENT = ['vt-9', 'vt-10', 'vt-11'];

export function SectionTires({ filterData, car, slug }: SectionTiresProps) {
	const t = useTranslations('filters');
	const locale = useLocale();
	const { data } = baseDataApi.useFetchBaseDataQuery();
	const value = slug?.find(item => /^b-\d+$/.test(item));
	const number = value ? Number(value.split('-')[1]) : null;
	const { data: manufModels } = baseDataApi.useFetchManufModelsQuery(`${ number }`);
	const vt = slug?.find(item => item.startsWith('vt-'));
	const isCargo = vt && CARGO.includes(vt);
	const isSpecialEquipment = vt && SPECIAL_EQUIPMENT.includes(vt);
	const country = locale === Locale.UK ? data?.country : data?.country_ru;

	return (
		<>
			{ !car && <>
				<Autocomplete
					name='width'
					label={ t('width') }
					checkboxKey='w-'
					slug={ slug }
					section={ section }
					options={ filterData?.tyre_width.map(item => ({ value: item.value, label: item.value, p: item.p })) || [] }
				/>
				<Autocomplete
					name='height'
					label={ t('height') }
					checkboxKey='h-'
					slug={ slug }
					section={ section }
					options={ filterData?.tyre_height.map(item => ({ value: item.value, label: item.value, p: item.p })) || [] }
				/>
				<Autocomplete
					name='radius'
					label={ t('diameter') }
					checkboxKey='d-'
					slug={ slug }
					section={ section }
					options={ filterData?.tyre_diameter?.map(item => ({
						value: item.value,
						label: `R${ item.value }`,
						p: item.p
					})) || [] }
				/>
			</> }
			{ isCargo || isSpecialEquipment || <>
				<Autocomplete
					name='sezon'
					label={ t('season') }
					checkboxKey='s-'
					slug={ slug }
					section={ section }
					options={ TIRE_SEASON.map(item => ({
						value: item.value,
						label: locale === Locale.UK ? item.name_ua : item.name
					})) }
				/>
				{ slug?.includes('s-2') && <Autocomplete
					name='stud'
					label={ t('studding') }
					checkboxKey='stud-'
					slug={ slug }
					section={ section }
					options={ TIRE_WINTER_SEASON.map(item => ({
						value: item.value,
						label: locale === Locale.UK ? item.name_ua : item.name
					})) }
				/> }
			</> }
			{ isCargo && <Autocomplete
				name='vehicle_type'
				label={ t('appointment') }
				checkboxKey='vt-'
				slug={ slug }
				section={ section }
				options={ APPOINTMENT_CARGO.map(item => ({
					value: item.value,
					label: locale === Locale.UK ? item.name_ua : item.name
				})) }
			/> }
			{ isSpecialEquipment && <Autocomplete
				name='vehicle_type'
				label={ t('appointment') }
				checkboxKey='vt-'
				slug={ slug }
				section={ section }
				options={ APPOINTMENT_INDUSTRIAL.map(item => ({
					value: item.value,
					label: locale === Locale.UK ? item.name_ua : item.name
				})) }
			/> }
			<Autocomplete
				name='brand'
				label={ t('brand') }
				checkboxKey='b-'
				slug={ slug }
				section={ section }
				options={ data?.brand.map(item => ({ value: item.value, label: item.label })) || [] }
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
			<Autocomplete
				name='country'
				label={ t('country') }
				checkboxKey='ctr-'
				slug={ slug }
				section={ section }
				options={ country?.map(item => ({ value: item.value, label: item.label })) || [] }
			/>
			<Autocomplete
				name='year'
				label={ t('year') }
				checkboxKey='y-'
				slug={ slug }
				section={ section }
				options={ data?.tyre_year.map(item => ({ value: String(item.value), label: String(item.label) })) || [] }
			/>
			{ isCargo || isSpecialEquipment || <>
				<Autocomplete
					name='li'
					label={ t('load index') }
					checkboxKey='li-'
					slug={ slug }
					section={ section }
					options={ data?.load.map(item => ({ value: item.value, label: item.value })) || [] }
				/>
				<Autocomplete
					name='si'
					label={ t('speed index') }
					checkboxKey='si-'
					slug={ slug }
					section={ section }
					options={ data?.speed.map(item => ({ value: item.value, label: item.value })) || [] }
				/>
				<Autocomplete
					name='omolog'
					label={ t('homologation') }
					checkboxKey='hm-'
					slug={ slug }
					section={ section }
					options={ data?.omolog.map(item => ({ value: item.value, label: item.value })) || [] }
				/>
			</> }
		</>
	);
}
