import { Section } from '@/shared/types/section';
import type { BaseDataApi } from '@/entities/filters/api/filters.api.types';
import { AkumProps } from '@/entities/products/api/types';

export function getBrandLabel(
	value: string,
	section: Section,
	data: BaseDataApi | undefined,
	dataAkum: AkumProps | undefined,
) {
	if (section === Section.Tires) {
		return data?.brand.find(b => b.value === +value)?.label;
	}

	if (section === Section.Disks) {
		return data?.brand_disc.find(b => b.value === +value)?.label;
	}

	if (section === Section.Battery) {
		return dataAkum?.brand_akum.find(b => b.value === +value)?.label;
	}

	return value;
}
