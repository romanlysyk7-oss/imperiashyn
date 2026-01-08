'use client';

import { useDisclosure } from '@heroui/react';
import { useAddToCart } from '../model/useAddToCart';
import { AddToCartButton } from './AddToCartButton';
import { Section } from '@/shared/types/section';
import { useAppSelector } from '@/shared/hooks/redux';
import { AddToCartDrawer } from '@/features/cart/add-to-cart-drawer';

interface Props {
	id: number;
	quantity: number;
	section: Section;
	isProductPage?: boolean;
}

export function AddToCart({ id, quantity, section, isProductPage }: Props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { addToCart } = useAddToCart({ id, quantity, section });
	const { cartItems } = useAppSelector(state => state.cartReducer);
	const inCart = cartItems.some(item => item.id === id);

	const handleClick = () => {
		onOpen();
		if(!inCart) addToCart();
	};

	return (
		<>
			<AddToCartButton onClick={ handleClick } inCart={ inCart } isProductPage={ isProductPage } />
			<AddToCartDrawer isOpen={ isOpen } onClose={ onClose } cartItems={ cartItems } />
		</>
	);
}
