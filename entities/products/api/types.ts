export type SeasonType = '1' | '2' | '3';
export type VehicleType = '1' | '2' | '3' | '7' | '8' | '9';

export interface ModelApi {
	name: string;
	model_images: {
		small: string;
		big: string;
	}[];
}

export interface BestOfferApi {
	id: number;
	price: string;
	post_id: number;
	city: string;
	city_ru: string;
	year: number;
	country: string;
	country_ru: string;
	quantity: number;
}

export interface ProductApi {
	full_name: string;
	default_photo: string;
	group: number;
	sku: string;
	product_id: number;
	trc_id: number;
	min_price: number;
	max_price: number;
	season: SeasonType;
	vehicle_type: VehicleType;
	popularity: number;
	model_id: number;
	brand: number;
	offers: BestOfferApi[];
	brand_name: string;

	diameter: string | null;
	width: string | null;
	height: string | null;

	load_index: string | null;
	load_index_ru: string | null;
	speed_index: string | null;
	speed_index_ru: string | null;

	homologation: string | null;
	typedisc: string | null;
	krep_pcd1: string | null;
	et: string | null;
	dia: string | null;

	jemnist: string | null;
	puskovii_strum: string | null;
	napruga: string | null;

	run_flat: boolean;
	page_url: string;
	model: ModelApi;
	best_offer: BestOfferApi;
	labels: unknown[];
	studded: boolean;
}

export interface ProductsResponseApi {
	result: boolean;
	data: {
		total_count: number;
		products: ProductApi[];
	};
}

interface Item {
	value: string
	p: string
	numeric?: number
}

interface ItemS {
	value: number
	label: string
	sort_order: string
}

export interface AkumProps {
	brand_akum: ItemS[]
	dovzina: Item[]
	jemnist: Item[]
	napruga: Item[]
	obslugovuvanist: []
	poliarnist: Item[]
	['polozennia-klem']: []
	['puskovii-strum']: Item[]
	sirina: Item[]
	['tip-elektrolitu']: Item[]
	['tip-korpusu']: Item[]
	visota: Item[]
}

