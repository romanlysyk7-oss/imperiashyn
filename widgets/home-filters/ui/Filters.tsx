'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Tab, Tabs } from '@heroui/tabs';
import { twMerge } from 'tailwind-merge';

import styles from './index.module.scss';

import { ByCar } from '@/features/catalog-filter-by-car';
import { TiresFilters } from './TiresFilters';
import { DisksFilters } from './DisksFilters';

import { Section } from '@/shared/types/section';
import type { FiltersBaseData } from '@/entities/filters/model/filters.types';

interface Props {
	filters?: FiltersBaseData;
}

export function Filters({ filters }: Props) {
	const locale = useLocale();
	const t = useTranslations('filters');
	const [ selected, setSelected ] = useState<Section>(Section.Tires);

	return (
		<section
			className={ twMerge(
				'w-full md:p-0 h-[600] md:h-[500]',
				styles['home-filter'],
			) }
		>
			<div className="container mx-auto py-6 lg:py-16 xl:py-24 px-4">
				<Tabs
					aria-label="Filters tabs"
					selectedKey={ selected }
					size="lg"
					variant="underlined"
					color="secondary"
					onSelectionChange={ (key) => setSelected(key as Section) }
					className='mt-2 md:mt-11 mb-8 flex justify-center'
					classNames={{
						tabList: "gap-6 relative rounded-none p-0 border-b border-divider border-gray-200/20",
						tab: 'text-base xl:text-3xl uppercase font-bold px-6 py-4 w-full',
						cursor: "w-full",
						tabContent: 'text-gray-200/80'
				}}
				>
					<Tab key={ Section.Tires } title={ t(Section.Tires) } >
						<TiresFilters filters={ filters } locale={ locale } />
					</Tab>
					<Tab key={ Section.Disks } title={ t(Section.Disks) } >
						<DisksFilters filters={ filters } locale={ locale } />
					</Tab>
					<Tab key={ Section.Car } title={ t('by car') } >
						<div className='grid gap-2.5 md:mt-7 grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
							<ByCar isHomeFilter car={ 'car-' } section={ Section.Tires } />
						</div>
					</Tab>
				</Tabs>
			</div>
		</section>
	);
}
