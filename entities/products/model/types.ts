import { Section } from '@/shared/types/section';

export type SeasonType = '1' | '2' | '3';
export type VehicleType = '1' | '2' | '3' | '7' | '8' | '9';

export interface Product {
	full_name: string;
	page_url: string;
	default_photo: string;
	viewed: number;
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
	brand_name: string;
	brand_alias: string;
	brand_image: string;
	diameter: string;
	height: string;
	width: string;
	load_index: string;
	load_index_ru: string;
	speed_index: string;
	speed_index_ru: string;
	homologation: boolean;
	reinforce: string | false;
	run_flat: boolean;
	studded: boolean;
	offers: boolean;

	pcd1: false;
	et: false;
	dia: false;
	color: false;
	color_id: false;
	typedisc: false;
	id_typedisc: false;
	krep: false;
	krep_pcd1: false;

	model: ProductModel;
	best_offer: BestOffer | null;
	labels: ProductLabel[];
}

export interface ProductModel {
	name: string;
	alias: string;
	model_images: ModelImage[];
}

export interface ModelImage {
	small: string;
	big: string;
}

export interface BestOffer {
	id: number;
	price: string;
	post_id: number;
	city: string;
	city_ru: string;
	year: number;
	country: string;
	country_ru: string;
}

export interface ProductLabel {
	id?: number;
	name?: string;
}

export interface ProductItem {
	id: number;
	section: Section;
	quantity?: number;
}
