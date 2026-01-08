import { VehicleType } from '@/entities/products/model';

export interface ProductDescription {
	ua: ProductSeo;
	ru: ProductSeo;
}

export interface ProductModelDescription {
	ua: ProductModelSeo;
	ru: ProductModelSeo;
}

export interface ProductSeo {
	meta_title: string | null;
	meta_description: string | null;
	meta_h1: string | null;
	description: string | null;
}

export interface ProductModelSeo {
	name: string;
	meta_title: string | null;
	meta_h1: string | null;
	meta_description: string | null;
}

export interface ProductPhoto {
	url_part: string;
	url_part2: string;
}

export interface ProductPhotos {
	urls: ProductImage[];
}

export interface ProductImage {
	small: string;
	big: string;
}

export interface ProductBrand {
	id: number;
	alias: string;
	name: string;
}

export interface ProductPost {
	post_id: number;
	name: string;
	status: number;
	city: string;
	city_ru: string;

	created_at: string;
	updated_at: string;
}

export interface ProductOffer {
	offer_id: number;
	product_id: number;
	quantity: number;

	price: string;
	opt: string;
	my_opt: string;

	status: number;
	viewed: number;

	created_at: string;
	updated_at: string;
	updated: string;
	updateds: string;

	block: number;
	post_id: number;

	country: string;
	country_ru: string;
	year: number;

	posts: ProductPost;
}

export interface ProductOfferGroup {
	id: number;
	sku: string;

	model: number;
	width: string;
	height: string;
	diameter: string;

	load_index: string;
	load_index_ru: string;

	speed_index: string;
	speed_index_ru: string;

	vehicle_type: VehicleType;

	krep_pcd1: string;
	et: string;
	dia: string;
	color: string;
	color_id: string;
	typedisc: string;
	id_typedisc: string;

	reinforce: boolean;
	run_flat: boolean;
	offroad: boolean;
	off_road: boolean;

	homologation: boolean;
	studded: boolean;
	active: boolean;

	ply_rating: boolean;
	ZR: boolean;
	demo: boolean;
	seal: boolean;
	silent: boolean;
}

export interface Review {
	review_id: number
	score: number
	status: number
	model_id: number
	product_id: number
	trc_id: null
	text: string
	minus: null
	plus: null
	name: string
	email: string
	created_at: string
	updated_at: string
}


export interface ProductModel {
	id: number;
	name: string;

	brand: number;
	brand_name: string;
	brand_image: string;
	brand_alias: string;

	alias: string;
	season: string;

	images: ProductImage[];
}

export interface ProductApi {
	id: number;
	disabled: boolean;
	size_format: number;

	photo: ProductPhoto;
	photos: ProductPhotos;

	min_price: number;
	max_price: number;

	trc_id: number;
	full_name: string;
	page_url: string;

	brand: ProductBrand;
	model: ProductModel;
	model_description: ProductModelDescription;

	offers: ProductOffer[];
	offer_group: ProductOfferGroup;

	labels: unknown[];
	review: Review[];

	descr: ProductDescription;
}

export interface ProductApiResponse {
	result: boolean;
	data: ProductApi;
}
