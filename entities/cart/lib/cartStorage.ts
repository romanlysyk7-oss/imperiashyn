import { addToStorage, getFromStorage, removeFromStorage } from '@/shared/lib/locale-storage/localeStorage';
import { ProductItem } from '@/entities/products/model/types';

const STORAGE_KEY = 'reducerCart';

export function getCart(): ProductItem[] {
	return getFromStorage(STORAGE_KEY) ?? [];
}

export function saveCart(cart: ProductItem[]) {
	addToStorage(STORAGE_KEY, cart);
}

export function updatedCart(id: number) {
	removeFromStorage(STORAGE_KEY, id);
}
