'use client';

import { useAppDispatch } from '@/shared/hooks/redux';
import { updatedCart } from '@/entities/cart/lib/cartStorage';
import { removeItem } from '@/entities/cart/model/cart.slice';

export function useRemoveFromCart(id: number) {
	const dispatch = useAppDispatch();

	const removeFromCart = () => {
		dispatch(removeItem(id));
		updatedCart(id);
	};

	return { removeFromCart };
}
