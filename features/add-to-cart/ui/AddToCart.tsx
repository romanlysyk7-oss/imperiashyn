'use client';

import { useDisclosure } from '@heroui/react';

import { Section } from '@/shared/types/section';
import { useAppSelector } from '@/shared/hooks/redux';
import { AddToCartDrawer } from '@/features/cart/add-to-cart-drawer';

import { useAddToCart } from '../model/useAddToCart';
import { AddToCartButton } from './AddToCartButton';

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
	isProductPage?: boolean;
}

export function AddToCart({ id, quantity, section, isProductPage, data }: Props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { addToCart } = useAddToCart({ id, quantity, section, data });
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
