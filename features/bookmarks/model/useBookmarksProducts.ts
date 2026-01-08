import { useAppSelector } from '@/shared/hooks/redux';
import { useProducts } from '@/features/products/get-products';

export function useBookmarksProducts() {
	const { bookmarksItems } = useAppSelector(state => state.bookmarksReducer);

	return useProducts(
		bookmarksItems,
		'reducerBookmarks',
		true
	);
}