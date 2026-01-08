'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/hooks/redux';
import { productApi } from '@/entities/products/api/product.api';
import { removeFromStorage } from '@/shared/lib/locale-storage/localeStorage';
import { removeItem } from '@/entities/cart/model/cart.slice';
import { removeBookmarks } from '@/features/bookmarks/toggle/lib/storage';
import { removeComparison } from '@/features/comparison/toggle/lib/storage';
import { ProductApi } from '@/entities/products/api/types';

interface ProductItem {
	id: number;
	section: string;
	quantity?: number;
}

type GroupedIds = { tires: number[]; cargo: number[]; disks: number[]; battery: number[]; };
type GroupedItems = { tiresItems: ProductApi[]; cargoItems: ProductApi[]; disksItems: ProductApi[]; batteryItems: ProductApi[]; };

const emptyIds: GroupedIds = { tires: [], cargo: [], disks: [], battery: [] };

export const getProducts = (
	products: ProductItem[] = [],
	reducer: 'reducerCart' | 'reducerBookmarks' | 'reducerComparison' | 'recentlyViewed',
	byOffer?: boolean
) => {
	const dispatch = useAppDispatch();

	const [groupedIds, setGroupedIds] = useState<GroupedIds>(emptyIds);
	const [groupedItems, setGroupedItems] = useState<GroupedItems>({
		tiresItems: [],
		cargoItems: [],
		disksItems: [],
		batteryItems: [],
	});
	const [newProducts, setNewProducts] = useState<ProductApi[]>([]);

	// Group products by section
	useEffect(() => {
		const grouped: GroupedIds = { tires: [], cargo: [], disks: [], battery: [] };
		products.forEach(({ id, section }) => {
			if (grouped[section as keyof GroupedIds]) {
				grouped[section as keyof GroupedIds].push(id);
			}
		});
		setGroupedIds(grouped);
	}, [products]);

	// Query definitions
	const { data: dataTires, isLoading: tiresIsLoading } = productApi.useFetchProductsQuery({
		id: `${byOffer ? '?Offer_id' : '?product_ids'}=${groupedIds.tires.join(',')}`,
		length: groupedIds.tires.length || 1,
	}, { skip: groupedIds.tires.length === 0 });

	const { data: dataCargo, isLoading: cargoIsLoading } = productApi.useFetchProductsQuery({
		id: `${byOffer ? '?typeproduct=2&Offer_id' : '?typeproduct=2&product_ids'}=${groupedIds.cargo.join(',')}`,
		length: groupedIds.cargo.length || 1,
	}, { skip: groupedIds.cargo.length === 0 });

	const { data: dataDisks, isLoading: disksIsLoading } = productApi.useFetchProductsQuery({
		id: `${byOffer ? '?typeproduct=3&Offer_id' : '?typeproduct=3&product_ids'}=${groupedIds.disks.join(',')}`,
		length: groupedIds.disks.length || 1,
	}, { skip: groupedIds.disks.length === 0 });

	const { data: dataBattery, isLoading: batteryIsLoading } = productApi.useFetchProductsQuery({
		id: `${byOffer ? '?typeproduct=4&Offer_id' : '?typeproduct=4&product_ids'}=${groupedIds.battery.join(',')}`,
		length: groupedIds.battery.length || 1,
	}, { skip: groupedIds.battery.length === 0 });

	// Group products by their section and update grouped IDs state
	useEffect(() => {
		const grouped = products.reduce(
			(acc, product) => {
				switch (product.section) {
					case 'tires':
						acc.tires.push(product.id);
						break;
					case 'cargo':
						acc.cargo.push(product.id);
						break;
					case 'disks':
						acc.disks.push(product.id);
						break;
					case 'battery':
						acc.battery.push(product.id);
						break;
					default:
						break;
				}
				return acc;
			},
			{ tires: [], cargo: [], disks: [], battery: [] } as { tires: number[]; cargo: number[]; disks: number[]; battery: number[] }
		);
		setGroupedIds(grouped);
	}, [products]);

	// Update grouped items based on data fetched from API
	useEffect(() => {
		if(dataTires) {
			groupedIds.tires.forEach(product => {
				if(!dataTires.data?.products.find(item => byOffer ? item.best_offer.id === product : item.group)) {
					if(reducer !== 'recentlyViewed') {
						removeFromStorage(reducer, product);
						dispatch(reducer === 'reducerCart' ? removeItem(product) : reducer === 'reducerBookmarks' ? removeBookmarks(product) : removeComparison(product));
					}
				}
			})
		}

		if(dataCargo) {
			groupedIds.cargo.forEach(product => {
				if(!dataCargo.data?.products.find(item => byOffer ? item.best_offer.id === product : item.group)) {
					if(reducer !== 'recentlyViewed') {
						removeFromStorage(reducer, product);
						dispatch(reducer === 'reducerCart' ? removeItem(product) : reducer === 'reducerBookmarks' ? removeBookmarks(product) : removeComparison(product));
					}
				}
			})
		}

		if(dataDisks) {
			groupedIds.disks.forEach(product => {
				if(!dataDisks.data?.products.find(item => byOffer ? item.best_offer.id === product : item.group)) {
					if(reducer !== 'recentlyViewed') {
						removeFromStorage(reducer, product);
						dispatch(reducer === 'reducerCart' ? removeItem(product) : reducer === 'reducerBookmarks' ? removeBookmarks(product) : removeComparison(product));
					}
				}
			})
		}

		if(dataBattery) {
			groupedIds.battery.forEach(product => {
				if(!dataBattery.data?.products.find(item => byOffer ? item.best_offer.id === product : item.group)) {
					if(reducer !== 'recentlyViewed') {
						removeFromStorage(reducer, product);
						dispatch(reducer === 'reducerCart' ? removeItem(product) : reducer === 'reducerBookmarks' ? removeBookmarks(product) : removeComparison(product));
					}
				}
			})
		}

		setGroupedItems({
			tiresItems: dataTires?.data?.products || [],
			cargoItems: dataCargo?.data?.products || [],
			disksItems: dataDisks?.data?.products || [],
			batteryItems: dataBattery?.data?.products || [],
		});
	}, [dataTires, dataCargo, dataDisks, dataBattery]);

	// Sort and update new products based on the original products array
	useEffect(() => {
		const allProducts = [...groupedItems.tiresItems, ...groupedItems.cargoItems, ...groupedItems.disksItems, ...groupedItems.batteryItems];
		const sortedProducts = products
			.map((product) => allProducts.find((item) => item.product_id === product.id))
			.filter((item): item is ProductApi => !!item); // Type narrowing to ensure no undefined values

		setNewProducts(sortedProducts);
	}, [groupedItems, products]);

	return {
		products: newProducts,
		tires: groupedItems.tiresItems,
		cargo: groupedItems.cargoItems,
		disks: groupedItems.disksItems,
		battery: groupedItems.batteryItems,
		isLoading: tiresIsLoading || cargoIsLoading || disksIsLoading || batteryIsLoading,
	};
};
