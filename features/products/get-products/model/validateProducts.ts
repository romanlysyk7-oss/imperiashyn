import { removeFromStorage } from '@/shared/lib/locale-storage/localeStorage';
import { removeItem } from '@/entities/cart/model/cart.slice';
import { removeBookmarks } from '@/features/bookmarks/toggle/lib/storage';
import { removeComparison } from '@/features/comparison/toggle/lib/storage';
import { ProductsReducer } from './types';
import { AppDispatch } from '@/shared/store/createStore';
import { ProductApi } from '@/entities/products/api/types';

interface Params {
	ids: number[];
	items?: ProductApi[];
	reducer: ProductsReducer;
	byOffer?: boolean;
	dispatch: AppDispatch;
}

export function validateProducts({ ids, items, reducer, byOffer, dispatch, }: Params) {
	if(!items || reducer === 'recentlyViewed') return;

	ids.forEach(id => {
		const exists = items.some(item =>
			byOffer
				? item.best_offer.id === id
				: item.group === id
		);

		if(!exists) {
			removeFromStorage(reducer, id);

			dispatch(
				reducer === 'reducerCart'
					? removeItem(id)
					: reducer === 'reducerBookmarks'
						? removeBookmarks(id)
						: removeComparison(id)
			);
		}
	});
}
