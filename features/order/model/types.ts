import { Section } from '@/shared/types/section';
import { ProductOffer } from '@/entities/product/api/types';

export interface QuickOrderProps {
	offerId: number;
	quantity: number;
	section: Section;
	offerItem?: ProductOffer;
}
