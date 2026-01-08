import { VehicleType } from '@/entities/products/model';
import { ProductOffer, ProductOfferGroup, Review } from '@/entities/product/api/types';

export interface Images {
	small: string;
	big: string;
}

export interface Product {
	id: number;
	sku: string;
	name: string;
	slug: string;
	imageSmall: string;
	imageBig: string;
	images: Images[];
	brandId: number;
	brandImage: string;
	brandName: string;
	modelId: number;
	modelName: string;
	studded: boolean;
	descriptionUa: string | null;
	descriptionRu: string | null;
	offers: ProductOffer[];
	offerGroup: ProductOfferGroup;

	price: number;
	maxPrice: number;
	availableQuantity: number;

	season: 'summer' | 'winter' | 'all season';
	seasonNum: string;
	width: string;
	height: string;
	diameter: string;
	vehicleType: VehicleType;

	disabled: boolean;

	review: Review[];
	trcId: number;
}

export interface ProductPageParams {
	locale: string;
	product: string;
}
