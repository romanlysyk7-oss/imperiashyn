import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '@/shared/api/baseQuery';
import { API_CONSTANTS, formEndpoints } from '@/config/api';

export const callbackApi = createApi({
	reducerPath: 'callbackApi',
	baseQuery,
	endpoints: builder => ({
		createCallback: builder.mutation<
			{ result: boolean },
			{ firstname: string, phone: string; product_id: string; quantity: string }
		>({
			query: data => ({
				url: formEndpoints.callback,
				method: API_CONSTANTS.METHODS.POST,
				body: JSON.stringify(data),
			}),
		}),
	}),
});

export const {
	useCreateCallbackMutation
} = callbackApi;
