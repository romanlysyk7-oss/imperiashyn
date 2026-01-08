import { Product } from '@/entities/products/model';

export interface CartItemTypes {
	product: Product;
	quantity: number;
}
