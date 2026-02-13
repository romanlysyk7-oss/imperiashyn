import { Ga4EventPayload } from './types';

const isClient = () => typeof window !== 'undefined';

export const pushDataLayer = (payload: Ga4EventPayload) => {
	if(!isClient()) return;

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({ ecommerce: null });
	window.dataLayer.push(payload);

	if(process.env.NODE_ENV === 'development') {
		console.log('[GA4]', payload);
	}
};
