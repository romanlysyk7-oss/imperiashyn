import { ProductItem } from '@/entities/products/model/types';

export interface ProductPrices {
	id: number;
	price: number;
}

export const getCartTotal = (cartItems: ProductItem[], productPrices: ProductPrices[]) => productPrices.reduce(
	(sum, item) => sum + item.price * (cartItems.find(cartItem => cartItem.id === item.id)?.quantity || 1),
	0,
);
