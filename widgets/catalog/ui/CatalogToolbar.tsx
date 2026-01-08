'use client';

import { Section } from '@/shared/types/section';
import { CarTypeFilter, CatalogSortSelect } from '@/features/catalog';

interface Props {
	section: Section;
	car: string | null;
	slug?: string[];
}

export function CatalogToolbar({ section, car, slug }: Props) {
	return (
		<div className="flex justify-end items-center mb-3">
			{ !car && section === Section.Tires && (
				<div className="hidden lg:flex mr-6">
					<CarTypeFilter />
				</div>
			) }
			<CatalogSortSelect section={ section } slug={ slug } />
		</div>
	);
}
