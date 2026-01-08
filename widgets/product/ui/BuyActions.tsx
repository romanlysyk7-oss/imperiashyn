import { AddToCart } from '@/features/add-to-cart';
import { Section } from '@/shared/types/section';
import { ProductOffer } from '@/entities/product/api/types';
import { QuickOrder } from '@/features/order';

interface Props {
	id: number;
	quantity: number;
	section: Section;
	offerItem?: ProductOffer;
}

export function BuyActions({ id, quantity, section, offerItem }: Props) {
	return (
		<div className='relative buttons-buy flex flex-col items-end gap-3'>
			<AddToCart
				isProductPage
				id={ id || 0 }
				quantity={ quantity }
				section={ section }
			/>
			<QuickOrder offerItem={ offerItem } section={ section } offerId={ id } quantity={ quantity } />
		</div>
	)
}