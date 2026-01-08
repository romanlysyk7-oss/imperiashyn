import { getProduct } from '@/entities/product/model/services';

export async function getSeo(product: string) {
	const match = product.match(/(\d+)$/);
	const id = match ? match[1] : '';
	const response = await getProduct(id);

	return {
		title: response.name || '',
		description: response.name || '',
	};
}