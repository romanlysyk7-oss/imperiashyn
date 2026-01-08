import { FiltersBaseData } from '@/entities/filters/model/filters.types';

export interface TiresFiltersProps {
	locale: string;
	filters?: FiltersBaseData;
	isAdditionalFilter?: boolean;
}
