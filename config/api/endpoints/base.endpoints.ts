import { API_CONSTANTS } from '../constants';
const { BASE_DATA, API } = API_CONSTANTS.ENDPOINTS;

export const baseEndpoints = {
	baseData: BASE_DATA,
	settings: `${BASE_DATA}/settings`,
	featureParams: `${API}/getFeatureParams`,
	reviews: `${API}/reviews`,
	filterData: (id: string) => `${API}/FildterData${id}`,
	manufModels: (section: string) => `${API}/getManufModels/${section}`,
	brands: (id: string) => `${API}/catalog-map/${id}`,
	statiAlias: {
		byId: (id: string) => `${BASE_DATA}/StatiAlias/${id}`,
		all: `${BASE_DATA}/StatiAlias`,
	}
} as const;
