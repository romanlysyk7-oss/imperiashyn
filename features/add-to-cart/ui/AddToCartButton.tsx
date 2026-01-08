'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/button';
import * as Icons from '@/shared/ui/icons';
import { twMerge } from 'tailwind-merge';

interface Props {
	inCart: boolean;
	onClick: () => void;
	isProductPage?: boolean;
}

export function AddToCartButton({ inCart, onClick, isProductPage }: Props) {
	const t = useTranslations('filters');

	return (
		<Button
			onPress={ onClick }
			aria-label="Add to cart"
			className={ twMerge(isProductPage ? 'w-full md:w-72' : "min-w-16 md:min-w-24") }
			color={ inCart ? 'success' : 'primary' }
			startContent={ inCart ? <Icons.CheckIcon /> : '' }
		>
			{ (!isProductPage || !inCart) && (
				<Icons.CartIcon />
			) }
			{ isProductPage ? t('buy') : '' }
		</Button>
	);
}
