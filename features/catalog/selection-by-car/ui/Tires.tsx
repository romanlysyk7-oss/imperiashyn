'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { selectAlternativeSizes, selectFactorySizes, } from '@/entities/car-configuration/model/selectors';
import { buildTyreParams } from '@/entities/car-configuration/model/mappers';
import { useRouter } from '@/shared/i18n/navigation';

import { autoDataApi } from '@/features/catalog-filter-by-car/api/auto-data.api';

import { SizeButton } from './SizeButton';
import { CarBrand } from './CarBrand';
import { Section } from '@/shared/types/section';

interface Props {
	modification: number;
	car: string;
	cleaned: string;
	handleClick: (href: string) => void;
}

export function Tires({ modification, car, cleaned, handleClick }: Props) {
	const router = useRouter();
	const t = useTranslations('catalog');
	const { data } = autoDataApi.useFetchKitTyreSizeQuery(String(modification));
	const factory = selectFactorySizes(data);
	const alternative = selectAlternativeSizes(data);

	useEffect(() => {
		if(cleaned === '' && data) {
			const params = buildTyreParams(factory[0]);
			router.push(`/catalog/${Section.Tires}/${ car }${ params }`);
		}
	}, [data, cleaned])

	const renderButtons = (items: typeof factory) =>
		items.map(item => {
			const params = buildTyreParams(item);

			return (
				<SizeButton
					key={ item.value }
					handleClick={ handleClick }
					cleaned={ cleaned }
					params={ params }
					href={ `/catalog/tires/${ car }${ params }` }
				>
					{ `${ item.width }/${ item.height } R${ item.diameter }` }
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
