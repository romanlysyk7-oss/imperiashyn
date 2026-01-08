import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api/baseQuery';
import { autoEndpoints } from '@/config/api';
import { CarModelProps, KitTyreSize, KitDiskSize } from '../model/types';

export const autoDataApi = createApi({
	reducerPath: 'autoDataApi',
	baseQuery,
	endpoints: build => ({
		fetchAutoModel: build.query<CarModelProps[], string>({
			query: (id) => ({
				url: autoEndpoints.autoBrandModel(id),
			}),
		}),
		fetchAutoYear: build.query<number[], string>({
			query: (id) => ({
				url: autoEndpoints.autoBrandModelYear(id),
			}),
		}),
		fetchAutoModelKit: build.query<CarModelProps[], string>({
			query: (id) => ({
				url: autoEndpoints.autoBrandModelKit(id),
			}),
		}),
		fetchKitTyreSize: build.query<KitTyreSize[], string>({
			query: (id) => ({
				url: autoEndpoints.kitTyreSize(id),
			}),
		}),
		fetchKitDiskSize: build.query<KitDiskSize[], string>({
			query: (id) => ({
				url: autoEndpoints.kitDiskSize(id),
			}),
		}),
	}),
});

export const {
	useFetchAutoModelQuery,
	useFetchAutoYearQuery,
	useFetchAutoModelKitQuery,
	useFetchKitTyreSizeQuery,
	useFetchKitDiskSizeQuery,
} = autoDataApi;
