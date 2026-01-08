import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api/baseQuery';
import { API_CONSTANTS, deliveryEndpoints } from '@/config/api';

export const deliveryApi = createApi({
	reducerPath: 'deliveryApi',
	baseQuery,
	endpoints: build => ({
		fetchNpAllCity: build.query<any, string>({
			query: name => ({
				url: deliveryEndpoints.novaPoshta.allCity,
				method: API_CONSTANTS.METHODS.POST,
				body: { name },
			}),
		}),

		fetchNpWarehouses: build.query<any, string>({
			query: ref => deliveryEndpoints.novaPoshta.warehouses(ref),
		}),

		fetchNpDocumentPrice: build.query<{ AssessedCost: number, Cost: number }[], {
			offer_id: number | undefined;
			ref: string;
			count: number;
		}>({
			query: (params) => ({
				url: deliveryEndpoints.novaPoshta.documentPrice,
				method: API_CONSTANTS.METHODS.POST,
				body: JSON.stringify(params),
			}),
		}),
	}),
});

export const {
	useFetchNpAllCityQuery,
	useFetchNpWarehousesQuery,
	useFetchNpDocumentPriceQuery
} = deliveryApi;
