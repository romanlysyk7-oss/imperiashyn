declare global {
	interface Window {
		dataLayer?: Object[];
	}
}

export type Ga4EventPayload = {
	event: string;
	ecommerce?: Record<string, any>;
};
