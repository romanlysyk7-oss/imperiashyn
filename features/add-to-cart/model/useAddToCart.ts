'use client';

import { useAppDispatch } from '@/shared/hooks/redux';
import { getCart, saveCart } from '@/entities/cart/lib/cartStorage';
import { addItem } from '@/entities/cart/model/cart.slice';
import { Section } from '@/shared/types/section';
import { trackAddToCart } from '@/features/add-to-cart/analytics/trackAddToCart';

interface Props {
	id: number;
	data: {
		name: string,
		brand: string,
		model: string,
		price: number,
	}
	quantity: number;
	section: Section;
}

export function useAddToCart({ id, data, quantity, section }: Props) {
	const dispatch = useAppDispatch();
	const cart = getCart();

	const addToCart = () => {
		const updatedCart = [
			...cart,
			{ id, quantity, section },
		];

		trackAddToCart(id, data, section, quantity);
		dispatch(addItem({ id, quantity, section }));
		saveCart(updatedCart);
	};

	return { addToCart };
}
