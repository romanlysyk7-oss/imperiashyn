'use client';

import { useTranslations } from 'next-intl';
import { Divider, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, ScrollShadow, } from '@heroui/react';

import { Button } from '@/shared/ui/button';
import { CartItem } from '@/entities/cartItem';
import { AddToCartDrawerProps } from '../model/types';
import { useAddToCartDrawer } from '../model/useAddToCartDrawer';

export function AddToCartDrawer({ isOpen, onClose, cartItems, }: AddToCartDrawerProps) {
	const t = useTranslations('cart');
	const { products, total } = useAddToCartDrawer(cartItems);

	return (
		<Drawer isOpen={ isOpen } onOpenChange={ onClose } radius="none">
			<DrawerContent>
				{ () => (
					<>
						<DrawerHeader className="text-2xl font-bold text-gray-800">
							{ t('cart') }
						</DrawerHeader>
						<DrawerBody>
							<ScrollShadow>
								{ products.length ? (
									products.map((item, index) => (
										<div key={ item.best_offer.id }>
											<CartItem
												id={ item.best_offer.id }
												default_photo={ item.default_photo }
												full_name={ item.full_name }
												page_url={ item.page_url }
												sku={ item.sku }
												price={ item.min_price }
												maxQuantity={ item.offers[0].quantity }
											/>
											{ products.length - 1 !== index && (
												<Divider className="my-4"/>
											) }
										</div>
									))
								) : (
									<p>{ t('empty') }</p>
								) }
							</ScrollShadow>

							<Divider className="mt-auto"/>

							<div className="flex justify-between text-gray-900">
								<div className="font-bold">{ t('total') }</div>
								<div>{ total }₴</div>
							</div>

							<p className="text-gray-600">
								{ t('delivery info') }
							</p>
						</DrawerBody>

						<DrawerFooter className="flex-col">
							<Button onPress={ onClose } className="w-full">
								{ t('place an order') }
							</Button>
							<Button
								onPress={ onClose }
								className="w-full bg-gray-950"
							>
								{ t('continue shopping') }
							</Button>
						</DrawerFooter>
					</>
				) }
			</DrawerContent>
		</Drawer>
	);
}
