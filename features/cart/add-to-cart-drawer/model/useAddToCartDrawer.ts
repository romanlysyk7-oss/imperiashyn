import { useMemo } from 'react';
import { useProducts } from '@/features/products/get-products';
import { getCartTotal } from '@/features/cart/model/cart.logic';
import { ProductItem } from '@/entities/products/model/types';

export function useAddToCartDrawer(cartItems: ProductItem[]) {
	const { tires, cargo, disks, battery, isLoading } = useProducts(
		cartItems,
		'reducerCart',
		true
	);

	const products = useMemo(
		() =>
			cartItems.length
				? [ ...tires, ...cargo, ...disks, ...battery ]
				: [],
		[ cartItems.length, tires, cargo, disks, battery ]
	);

	const productPrices = useMemo(
		() =>
			products.map(item => ({
				id: item.best_offer.id,
				price: item.min_price,
			})),
		[ products ]
	);

	const total = useMemo(
		() => getCartTotal(cartItems, productPrices),
		[ cartItems, productPrices ]
	);

	return {
		products,
		total,
		isLoading,
	};
}
