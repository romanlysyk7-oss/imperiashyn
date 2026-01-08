'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { Section } from '@/shared/types/section';
import { Tab, Tabs } from '@heroui/tabs';
import { TiresFilters } from '@/widgets/home-filters/ui/TiresFilters';
import { DisksFilters } from '@/widgets/home-filters/ui/DisksFilters';
import { ByCar } from '@/features/catalog-filter-by-car';
import type { FiltersBaseData } from '@/entities/filters/model/filters.types';

interface Props {
	filters?: FiltersBaseData;
	section: Section;
}

export function Filters({ filters, section }: Props) {
	const locale = useLocale();
	const t = useTranslations('filters');
	const [ selected, setSelected ] = useState<Section>(Section.Tires);

	useEffect(() => {
		setSelected(section);
	}, [])

	return (
		<div className='max-w-xl mx-auto mt-8'>
			<div className={ twMerge('text-2xl uppercase font-bold', section === Section.Tires && 'text-white') }>
				{ t(section) }
			</div>
			<Tabs
				aria-label="Filters tabs"
				selectedKey={ selected }
				size="sm"
				variant="underlined"
				onSelectionChange={ (key) => setSelected(key as Section) }
				className='flex justify-end -mt-8'
				classNames={{
					tabList: "relative rounded-none p-0",
					tab: 'text-base font-semibold',
					cursor: section === Section.Tires ? 'bg-white' : '',
					tabContent: `${ section === Section.Tires && 'text-gray-100/60 text-gray-100/60 group-data-[selected=true]:text-white' }`
				}}
			>
				{ section === Section.Tires && <Tab key={ Section.Tires } title={ t('by parameters') } >
					<TiresFilters isAdditionalFilter filters={ filters } locale={ locale } />
				</Tab> }
				{ section === Section.Disks && <Tab key={ Section.Disks } title={ t('by parameters') } >
					<DisksFilters isAdditionalFilter filters={ filters } locale={ locale } />
				</Tab> }
				<Tab key={ Section.Car } title={ t('by car') } >
					<div className='grid gap-2.5 md:mt-4 grid-cols-1 md:grid-cols-2'>
						<ByCar isAdditionalFilter isHomeFilter car={ 'car-' } section={ section } />
					</div>
				</Tab>
			</Tabs>
		</div>
	)
}
