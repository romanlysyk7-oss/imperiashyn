import { AddToCart } from '@/features/add-to-cart';
import { Section } from '@/shared/types/section';
import { ProductOffer } from '@/entities/product/api/types';
import { QuickOrder } from '@/features/order';

interface Props {
	id: number;
	quantity: number;
	section: Section;
	data: {
		name: string,
		brand: string,
		model: string,
		price: number,
	}
	offerItem?: ProductOffer;
}

export function BuyActions({ id, quantity, section, data, offerItem }: Props) {
	console.log(offerItem);
	return (
		<div className='relative buttons-buy flex flex-col items-end gap-3'>
			<AddToCart
				isProductPage
				id={ id || 0 }
				quantity={ quantity }
				section={ section }
				data={ data }
			/>
			<QuickOrder offerItem={ offerItem } section={ section } offerId={ id } quantity={ quantity } />
		</div>
	)
}