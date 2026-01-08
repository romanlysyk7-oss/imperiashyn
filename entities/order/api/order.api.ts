import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api/baseQuery';
import { API_CONSTANTS, FORM_HEADERS, formEndpoints, orderEndpoints } from '@/config/api';
import { OrdersParamProps } from '@/entities/order/api/types.api';

export const orderApi = createApi({
	reducerPath: 'orderApi',
	baseQuery,
	endpoints: build => ({
		fetchOrdersParam: build.query<OrdersParamProps, void>({
			query: () => ({
				url: orderEndpoints.params,
			}),
		}),

		createOrder: build.mutation({
			query: data => ({
				url: orderEndpoints.create,
				method: API_CONSTANTS.METHODS.POST,
				body: JSON.stringify(data),
				headers: FORM_HEADERS,
			}),
		}),

		createCallback: build.mutation({
			query: data => ({
				url: formEndpoints.callback,
				method: API_CONSTANTS.METHODS.POST,
				body: JSON.stringify(data),
				headers: FORM_HEADERS,
			}),
		}),
	}),
});
