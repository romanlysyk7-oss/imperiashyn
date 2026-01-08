import { apiFetch } from '@/shared/api/fetcher';
import { baseEndpoints } from '@/config/api';
import { BaseDataApi } from '@/entities/filters/api/filters.api.types';

export const getFilterData = (id: string) =>
	apiFetch<BaseDataApi>(baseEndpoints.filterData(id));
