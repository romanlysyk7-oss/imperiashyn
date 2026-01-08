import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api/baseQuery';
import { API_CONSTANTS, productEndpoints } from '@/config/api';
import { AkumProps, ProductsResponseApi } from './types';

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery,
	tagTypes: [ 'Products' ],
	endpoints: build => ({
		fetchProducts: build.query<
			ProductsResponseApi,
			{ id: string; start?: number; length?: number }
		>({
			query: ({ id, start = 0, length = 10 }) => ({
				url: productEndpoints.products(id),
				method: API_CONSTANTS.METHODS.POST,
				body: { start, length },
			}),
		}),
		fetchDataAkum: build.query<AkumProps, void>({
			query: () => ({
				url: productEndpoints.dataAkum,
			}),
		}),

		// fetchProduct: build.query<ProductProps, string>({
		// 	query: section => productEndpoints.product(section),
		// 	providesTags: [ 'Products' ],
		// }),

		createComment: build.mutation<void, any>({
			query: comment => ({
				url: productEndpoints.reviews,
				method: API_CONSTANTS.METHODS.POST,
				body: JSON.stringify(comment),
			}),
			invalidatesTags: [ 'Products' ],
		}),
	}),
});

export const {
	useFetchProductsQuery,
	useFetchDataAkumQuery,
	// useFetchProductQuery,
	useCreateCommentMutation,
} = productApi;
