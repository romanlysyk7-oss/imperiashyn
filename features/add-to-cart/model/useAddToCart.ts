'use client';

import { useAppDispatch } from '@/shared/hooks/redux';
import { getCart, saveCart } from '@/entities/cart/lib/cartStorage';
import { addItem } from '@/entities/cart/model/cart.slice';
import { Section } from '@/shared/types/section';

interface Props {
	id: number;
	quantity: number;
	section: Section;
}

export function useAddToCart({ id, quantity, section }: Props) {
	const dispatch = useAppDispatch();
	const cart = getCart();

	const addToCart = () => {
		const updatedCart = [
			...cart,
			{ id, quantity, section },
		];

		dispatch(addItem({ id, quantity, section }));
		saveCart(updatedCart);
	};

	return { addToCart };
}
