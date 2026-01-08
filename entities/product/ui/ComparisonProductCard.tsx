import Image from 'next/image';

import { Button } from '@/shared/ui/button';
import type { ProductApi } from '@/entities/products/api/types';
import { ProductCharacteristics } from '@/features/product-characteristics/ui/ProductCharacteristics';
import { ProductName } from '@/entities/product/ui/ProductName';
import { productCharacteristicsMap } from '@/entities/product/model/characteristics-map';
import { AddToCart } from '@/features/add-to-cart';
import { Section } from '@/shared/types/section';

interface Props {
	product: ProductApi;
	handleClick: (id: number) => void;
	type: keyof typeof productCharacteristicsMap;
	section: Section;
}

export function ComparisonProductCard({ product, handleClick, type, section }: Props) {
	return (
		<div>
			<div className="w-72 relative m-1 min-h-60 bg-white">
				<Button
					isIconOnly
					radius="full"
					size='sm'
					color='default'
					className='absolute top-2 right-2 z-10'
					onPress={ () => handleClick(product.best_offer.id) }
				>
					X
				</Button>
				<Image src={ product.default_photo } height={ 240 } width={ 240 } alt=''/>
				<div className="px-2 text-center bg-gray-500 h-20 flex items-center justify-center w-full text-white">
					<ProductName full_name={ product.full_name } page_url={ product.page_url }/>
				</div>
			</div>

			<div className="divide-y divide-[#D0D4D9] text-center">
				<ProductCharacteristics
					type={ type }
					product={ product }
				/>
				<div className="pt-2 pb-14 px-1">
					<AddToCart isProductPage id={ product.best_offer.id || 0 } quantity={ 1 } section={ section }/>
				</div>
			</div>
		</div>
	);
}
