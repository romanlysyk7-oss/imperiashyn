import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api/baseQuery';
import { baseEndpoints } from '@/config/api';
import { BaseDataApi, ManufModels } from '@/entities/filters/api/filters.api.types';
import { apiFetch } from '@/shared/api/fetcher';

export const getBaseData = () =>
	apiFetch<BaseDataApi>(baseEndpoints.baseData);

export const baseDataApi = createApi({
	reducerPath: 'baseDataApi',
	baseQuery,
	endpoints: build => ({
		fetchBaseData: build.query<BaseDataApi, void>({
			query: () => baseEndpoints.baseData,
		}),
		fetchManufModels: build.query<ManufModels[], string>({
			query: id => baseEndpoints.manufModels(id),
		}),
	}),
});

export const {
	useFetchBaseDataQuery,
	useFetchManufModelsQuery,
} = baseDataApi;
