import { FiltersBaseData } from '@/entities/filters/model/filters.types';
import { Section } from '@/shared/types/section';
import { SelectOption } from '@/shared/types/common';
import { Locale } from '@/shared/types/locale';

interface Props {
	locale: string
	section: Section
	filters: FiltersBaseData | undefined
}

interface FilterConfigs {
	label: string
	name: string
	options: SelectOption[] | undefined
}

export const getFilters = ({ locale, section, filters }: Props) => {
	const filterConfigs: FilterConfigs[] = [];

	if(section === Section.Tires) {
		filterConfigs.push({
			label: 'width',
			name: 'width',
			options: filters?.tyreWidth.map(item => ({ value: item.value, label: item.value, p: item.p }))
		});

		filterConfigs.push({
			label: 'height',
			name: 'height',
			options: filters?.tyreHeight.map(item => ({ value: item.value, label: item.value, p: item.p }))
		});

		filterConfigs.push({
			label: 'diameter',
			name: 'radius',
			options: filters?.tyreDiameter.map(item => ({ value: item.value, label: `R${item.value}`, p: item.p }))
		});

		filterConfigs.push({
			label: 'season',
			name: 'sezon',
			options: filters?.tyreSeason.map(item => ({ value: item.value, label: locale === Locale.UK ? item.nameUa : item.name }))
		});

		filterConfigs.push({
			label: 'brand',
			name: 'brand',
			options: filters?.brand.map(item => ({ value: item.value, label: item.label }))
		});
	} else if(section === Section.Disks) {
		filterConfigs.push({
			label: 'brand',
			name: 'brand',
			options: filters?.diskBrand.map(item => ({ value: item.value, label: item.label }))
		});

		filterConfigs.push({
			label: 'diameter',
			name: 'radius',
			options: filters?.discDiameter.map(item => ({ value: item.value, label: `R${item.value}`, p: item.p }))
		});

		filterConfigs.push({
			label: 'fasteners',
			name: 'krepeg',
			options: filters?.discKrepeg.map(item => ({ value: item.value, label: item.value, p: item.p }))
		});

		filterConfigs.push({
			label: 'et from',
			name: 'etMin',
			options: filters?.discEt.map(item => ({ value: item.value, label: item.value, p: item.p }))
		});

		filterConfigs.push({
			label: 'et to',
			name: 'etMax',
			options: filters?.discEt.map(item => ({ value: item.value, label: item.value, p: item.p }))
		});
	}

	return filterConfigs;
};
