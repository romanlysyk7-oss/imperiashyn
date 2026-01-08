import { ProductItem } from '@/entities/products/model/types';

export interface AddToCartDrawerProps {
	isOpen: boolean;
	cartItems: ProductItem[];
	onClose: () => void;
}
