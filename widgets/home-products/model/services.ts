import { getProductsApi } from '@/entities/product/api/getProducts.api';

export async function fetchHomeProducts() {
	return getProductsApi({
		id: '?order[value]=featured',
		start: 0,
		length: 10,
	});
}
