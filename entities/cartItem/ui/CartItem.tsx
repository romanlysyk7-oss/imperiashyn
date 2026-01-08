import { ProductImage } from '@/entities/product/ui/ProductImage';
import { ProductName } from '@/entities/product/ui/ProductName';
import { Article } from '@/shared/ui/article';
import { RemoveFromCart } from '@/features/remove-from-cart';
import { SetQuantity } from '@/features/cart/set-quantity';

interface Props {
	id: number;
	default_photo: string;
	full_name: string;
	page_url: string;
	sku: string;
	price: number;
	maxQuantity: number;
}

export function CartItem({ id, default_photo, full_name, page_url, price, sku, maxQuantity }: Props) {
	return (
		<div className='flex items-center gap-3 relative'>
			<ProductImage default_photo={ default_photo } width={ 90 } height={ 90 } full_name={ full_name }/>
			<div>
				<div className='flex justify-between'>
					<ProductName full_name={ full_name } page_url={ page_url }/>
					<RemoveFromCart id={ id } />
				</div>
				<div className='flex justify-between'>
					<div>
						<Article sku={ `${ sku }` }/>
						<p className='font-bold'>{ price }₴</p>
					</div>
					<SetQuantity id={ id } maxQuantity={ maxQuantity } />
				</div>
			</div>
		</div>
	)
}
