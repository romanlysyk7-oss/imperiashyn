import { FilterParams } from './model/types';
import { URL_TO_FILTER_MAP } from './model/mappings';

export function parseFiltersUrl(url: string): Partial<FilterParams> {
	const result: Partial<FilterParams> = {};

	url.split('/').forEach(segment => {
		const [ urlKey, rawValue ] = segment.split('-');
		const filterKey = URL_TO_FILTER_MAP[urlKey];

		if(!filterKey) return;

		result[filterKey] = decodeURIComponent(rawValue ?? '');
	});

	return result;
}
