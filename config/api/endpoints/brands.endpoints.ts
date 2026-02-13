import { API_CONSTANTS } from '../constants';
const { API } = API_CONSTANTS.ENDPOINTS;

export const brandsEndpoints = {
	brand: (id: string) => `${API}/brand/${id}`,
	model: (id: string) => `${API}/model/${id}`
} as const;
