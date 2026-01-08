import { useEffect, useMemo } from 'react';
import { useAppDispatch } from '@/shared/hooks/redux';

import { ProductItem } from '@/entities/products/model/types';
import { groupProductsBySection } from './groupProducts';
import { validateProducts } from './validateProducts';
import { ProductsReducer } from './types';
import { productApi } from '@/entities/products/api/product.api';

export function useProducts(
	products: ProductItem[] = [],
	reducer: ProductsReducer,
	byOffer?: boolean
) {
	const dispatch = useAppDispatch();

	const groupedIds = useMemo(
		() => groupProductsBySection(products),
		[ products ]
	);

	const tires = productApi.useFetchProductsQuery(
		{
			id: `${ byOffer ? '?Offer_id' : '?product_ids' }=${ groupedIds.tires.join(',') }`,
			length: groupedIds.tires.length || 1,
		},
		{ skip: !groupedIds.tires.length }
	);

	const cargo = productApi.useFetchProductsQuery(
		{
			id: `${ byOffer ? '?typeproduct=2&Offer_id' : '?typeproduct=2&product_ids' }=${ groupedIds.cargo.join(',') }`,
			length: groupedIds.cargo.length || 1,
		},
		{ skip: !groupedIds.cargo.length }
	);

	const disks = productApi.useFetchProductsQuery(
		{
			id: `${ byOffer ? '?typeproduct=3&Offer_id' : '?typeproduct=3&product_ids' }=${ groupedIds.disks.join(',') }`,
			length: groupedIds.disks.length || 1,
		},
		{ skip: !groupedIds.disks.length }
	);

	const battery = productApi.useFetchProductsQuery(
		{
			id: `${ byOffer ? '?typeproduct=4&Offer_id' : '?typeproduct=4&product_ids' }=${ groupedIds.battery.join(',') }`,
			length: groupedIds.battery.length || 1,
		},
		{ skip: !groupedIds.battery.length }
	);

	useEffect(() => {
		validateProducts({ ids: groupedIds.tires, items: tires.data?.data?.products, reducer, byOffer, dispatch });
		validateProducts({ ids: groupedIds.cargo, items: cargo.data?.data?.products, reducer, byOffer, dispatch });
		validateProducts({ ids: groupedIds.disks, items: disks.data?.data?.products, reducer, byOffer, dispatch });
		validateProducts({ ids: groupedIds.battery, items: battery.data?.data?.products, reducer, byOffer, dispatch });
	}, [ tires.data, cargo.data, disks.data, battery.data ]);

	const sortedProducts = useMemo(() => {
		const all = [
			...(tires.data?.data?.products ?? []),
			...(cargo.data?.data?.products ?? []),
			...(disks.data?.data?.products ?? []),
			...(battery.data?.data?.products ?? []),
		];

		return products
			.map(p => all.find(i => i.product_id === p.id))
			.filter(Boolean);
	}, [ products, tires.data, cargo.data, disks.data, battery.data ]);

	return {
		products: sortedProducts,
		tires: tires.data?.data?.products ?? [],
		cargo: cargo.data?.data?.products ?? [],
		disks: disks.data?.data?.products ?? [],
		battery: battery.data?.data?.products ?? [],
		isLoading:
			tires.isLoading ||
			cargo.isLoading ||
			disks.isLoading ||
			battery.isLoading,
	};
}
