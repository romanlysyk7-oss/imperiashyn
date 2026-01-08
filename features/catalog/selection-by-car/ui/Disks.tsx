'use client';

import { useTranslations } from 'next-intl';

import { selectDiskAlternativeSizes, selectDiskFactorySizes, } from '@/entities/car-configuration/model/selectors';
import { buildDiskParams } from '@/entities/car-configuration/model/mappers';
import { useRouter } from '@/shared/i18n/navigation';

import { autoDataApi } from '@/features/catalog-filter-by-car/api/auto-data.api';

import { SizeButton } from './SizeButton';
import { CarBrand } from './CarBrand';
import { useEffect } from 'react';
import { Section } from '@/shared/types/section';

interface Props {
	modification: number;
	car: string;
	cleaned: string;
	handleClick: (href: string) => void;
}

export function Disks({ modification, car, cleaned, handleClick }: Props) {
	const router = useRouter();
	const t = useTranslations('catalog');
	const { data } = autoDataApi.useFetchKitDiskSizeQuery(String(modification));
	const factory = selectDiskFactorySizes(data);
	const alternative = selectDiskAlternativeSizes(data);

	useEffect(() => {
		if(cleaned === '' && data) {
			const params = buildDiskParams(factory[0]);
			router.push(`/catalog/${Section.Disks}/${ car }${ params }`);
		}
	}, [data, cleaned])

	const renderButtons = (items: typeof factory) =>
		items.map(item => {
			const { bolt_count, pcd, dia } = item.kits;
			const params = buildDiskParams(item);

			return (
				<SizeButton
					key={ item.value }
					handleClick={ handleClick }
					cleaned={ cleaned }
					params={ params }
					href={ `/catalog/disks/${ car }${ params }` }
				>
					{ `${ item.width }x${ item.diameter } ${ bolt_count }x${ pcd } ET${ item.et } DIA${ dia }` }
				</SizeButton>
			);
		});

	return (
		<>
			{ data?.[0] && <CarBrand data={ data[0] }/> }
			<h6 className="text-gray-500 mt-4 dark:text-[#949699]">
				{ t('factory') }
			</h6>
			<div className="flex gap-1 text-sm font-bold mt-2">
				{ renderButtons(factory) }
			</div>

			<h6 className="text-gray-500 mt-4 dark:text-[#949699]">
				Альтернатива
			</h6>
			<div className="flex flex-wrap gap-1 text-sm font-bold mt-2">
				{ renderButtons(alternative) }
			</div>
		</>
	);
}
