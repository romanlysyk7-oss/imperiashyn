import { FilterParams } from './model/types';
import { FILTER_TO_URL_MAP } from './model/mappings';

export function generateFiltersUrl(filter: FilterParams): string {
	return Object.entries(filter).reduce<string[]>((acc, [ key, value ]) => {
		if(!value) return acc;

		const urlKey = FILTER_TO_URL_MAP[key as keyof FilterParams];
		if(!urlKey) return acc;

		const formatted = Array.isArray(value)
			? value.join(',')
			: String(value);

		acc.push(`${ urlKey }-${ formatted }`);
		return acc;
	}, []).join('/');
}
