import { API_CONSTANTS } from '../constants';
const { BASE_DATA } = API_CONSTANTS.ENDPOINTS;

export const autoEndpoints = {
	autoBrandModel: (id: string) => `${BASE_DATA}/getAutoBrandModel/${id}`,
	autoBrandModelYear: (id: string) => `${BASE_DATA}/getAutoBrandModelYear/${id}`,
	autoBrandModelKit: (id: string) => `${BASE_DATA}/getAutoBrandModelKit/${id}`,
	kitTyreSize: (id: string) => `${BASE_DATA}/getKitTyreSize/${id}`,
	kitDiskSize: (section: string) => `${BASE_DATA}/getKitDiskSize/${section}`,
} as const;
