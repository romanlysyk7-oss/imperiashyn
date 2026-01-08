import { twMerge } from 'tailwind-merge';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { ProductApi } from '@/entities/products/api/types';

interface Props {
	products: ProductApi[];
	classnames?: string;
}

export function ProductList({ products, classnames }: Props) {
	return (
		<div className={ twMerge('grid gap-1.5', classnames) }>
			{ products.map(product => (
				<ProductCard key={ product.sku } item={ product } />
			)) }
		</div>
	)
}
