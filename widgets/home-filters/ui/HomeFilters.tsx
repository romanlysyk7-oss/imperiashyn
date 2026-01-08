import { getBaseData } from '@/entities/base-data/api/baseData.api';
import { mapBaseData } from '@/entities/filters/lib/mapBaseData';
import { Filters } from './Filters';

export async function HomeFilters() {
	const baseData = await getBaseData();
	const filters = baseData ? mapBaseData(baseData) : undefined;

	return <Filters filters={filters} />;
}
