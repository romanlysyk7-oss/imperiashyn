import { useAppSelector } from '@/shared/hooks/redux';
import { useProducts } from '@/features/products/get-products';

export function useComparisonProducts() {
	const { comparisonItems } = useAppSelector(state => state.comparisonReducer);

	return useProducts(
		comparisonItems,
		'reducerComparison',
		true
	);
}
