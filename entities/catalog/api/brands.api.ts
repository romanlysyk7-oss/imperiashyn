import { brandsEndpoints } from '@/config/api';
import { apiFetch } from '@/shared/api/fetcher';

export const getBrand = (id: string) =>
	apiFetch<any>(brandsEndpoints.brand(id));

export const getModel = (id: string) =>
	apiFetch(brandsEndpoints.model(id));
