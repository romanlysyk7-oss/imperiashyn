import { AppDispatch } from '@/shared/store/createStore';
import { getFromStorage } from '@/shared/lib/locale-storage/localeStorage';
import { addItemsFromStorage } from '@/entities/cart/model/cart.slice';

export function initCart(dispatch: AppDispatch) {
	const data = getFromStorage('reducerCart') || [];
	if(data.length) {
		dispatch(addItemsFromStorage(data));
	}
}
