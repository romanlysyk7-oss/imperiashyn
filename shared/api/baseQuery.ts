import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_CONSTANTS, DEFAULT_HEADERS } from '@/config/api';

export const baseQuery = fetchBaseQuery({
	baseUrl: API_CONSTANTS.BASE_URL,
	headers: DEFAULT_HEADERS,
});
