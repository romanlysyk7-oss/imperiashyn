'use client';

import { FC } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { productCharacteristicsMap } from '@/entities/product/model/characteristics-map';
import { CharacteristicsItem } from '@/shared/ui/characteristics-item/CharacteristicsItem';

import { Locale } from '@/shared/types/locale';
import type { ProductApi } from '@/entities/products/api/types';
import { mapSeason } from '@/entities/product/model/mappers';
import { getVehicleTypeLabel } from '@/entities/filters/lib/vehicleTypeLabel';

interface Props {
	type: keyof typeof productCharacteristicsMap;
	product: ProductApi;
}

export const ProductCharacteristics: FC<Props> = ({ type, product }) => {
	const { locale } = useParams<{ locale: Locale }>();
	const t = useTranslations('filters');

	return productCharacteristicsMap[type].map(key => {
		switch(key) {
			case 'season':
				return (
					<CharacteristicsItem
						key={ key }
						label={ t(key) }
						value={ t(mapSeason(product.season)) }
					/>
				);

			case 'vehicle_type':
				return (
					<CharacteristicsItem
						key={ key }
						label={ t(key) }
						value={ getVehicleTypeLabel(product.vehicle_type, t) }
					/>
				);

			case 'country':
				return (
					<CharacteristicsItem
						key={ key }
						label={ t(key) }
						value={
							product.best_offer.country
								? locale === Locale.UK
									? product.best_offer.country
									: product.best_offer.country_ru
								: '-'
						}
					/>
				);

			case 'price':
				return (
					<div
						key={ key }
						className='h-11 leading-11 font-bold bg-blue-50 mx-1'
					>
						{ product.best_offer.price } ₴
					</div>
				);

			case 'load_index':
				return (
					<CharacteristicsItem
						key={ key }
						label={ t(key) }
						value={
							(product.load_index
								? locale === Locale.UK
									? product.load_index
									: product.load_index_ru
								: '-') || '-'
						}
					/>
				);

			case 'speed_index':
				return (
					<CharacteristicsItem
						key={ key }
						label={ t(key) }
						value={
							(product.speed_index
								? locale === Locale.UK
									? product.speed_index
									: product.speed_index_ru
								: '-') || '-'
						}
					/>
				);

			default:
				return (
					<CharacteristicsItem
						key={ key }
						label={ t(key) }
						value={ (product as any)[key] || '-' }
					/>
				);
		}
	});
}
