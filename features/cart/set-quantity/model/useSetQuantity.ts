import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { setQuantity } from '@/entities/cart/model/cart.slice';
import { addToStorage, getFromStorage } from '@/shared/lib/locale-storage/localeStorage';
import { Section } from '@/shared/types/section';

export function useSetQuantity(id: number, maxQuantity: number) {
	const dispatch = useAppDispatch();
	const { cartItems } = useAppSelector(state => state.cartReducer);

	const quantity =
		cartItems.find(item => item.id === id)?.quantity ?? 1;

	const updateQuantity = useCallback(
		(nextQuantity: number) => {
			if(nextQuantity < 1 || nextQuantity > maxQuantity) return;

			const storage = getFromStorage('reducerCart');
			const current = storage.find(
				(item: { id: number }) => item.id === id
			);

			addToStorage('reducerCart', [
				...storage.filter((item: { id: number }) => item.id !== id),
				{ ...current, quantity: nextQuantity },
			]);

			dispatch(
				setQuantity({
					id,
					quantity: nextQuantity,
					section: Section.Tires,
				})
			);
		},
		[ id, maxQuantity, dispatch ]
	);

	return {
		quantity,
		increment: () => updateQuantity(quantity + 1),
		decrement: () => updateQuantity(quantity - 1),
		set: updateQuantity,
	};
}
