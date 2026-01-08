import { getProductApi } from '../api/getProduct.api';
import { mapProductFromApi } from './mappers';
import { Product } from './types';

export async function getProduct(id: string): Promise<Product> {
	const response = await getProductApi(id);

	return mapProductFromApi(response.data);
}
