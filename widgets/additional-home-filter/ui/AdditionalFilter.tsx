import { getBaseData } from '@/entities/base-data/api/baseData.api';
import { mapBaseData } from '@/entities/filters/lib/mapBaseData';
import { Section } from '@/shared/types/section';

import { FilterLayout } from './FilterLayout';
import { Filters } from './Filters';

export async function AdditionalFilter() {
	const baseData = await getBaseData();
	const filters = baseData ? mapBaseData(baseData) : undefined;

	return (
		<section className='grid grid-cols-1 md:grid-cols-2 mt-10'>
			<FilterLayout section={ Section.Tires } >
				<Filters filters={ filters } section={ Section.Tires } />
			</FilterLayout>
			<FilterLayout section={ Section.Disks } >
				<Filters filters={ filters } section={ Section.Disks } />
			</FilterLayout>
		</section>
	)
}