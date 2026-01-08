import { apiFetch } from '@/shared/api/fetcher';
import { API_CONSTANTS, productEndpoints } from '@/config/api';
import { ProductApiResponse } from '@/entities/product/api/types';

export const getProductApi = (id: string ) =>
	apiFetch<ProductApiResponse>(productEndpoints.product(id),
		{
			method: API_CONSTANTS.METHODS.GET,
		},
	);
