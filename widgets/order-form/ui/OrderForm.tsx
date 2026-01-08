'use client';

import { FormEvent, useState } from 'react';
import { Form } from '@heroui/react';
import { useTranslations } from 'next-intl';

import { Input } from '@/shared/ui/input';
import { PhoneInput } from '@/shared/ui/phone-input';
import { Textarea } from '@heroui/input';
import { NpCitySearch } from '@/features/delivery/city-search';

import { useAppSelector } from '@/shared/hooks/redux';
import { useAddToCartDrawer } from '@/features/cart/add-to-cart-drawer/model/useAddToCartDrawer';
import { useCreateOrder } from '@/features/order/create-order/model/useCreateOrder';

export function OrderForm() {
	const t = useTranslations('order');

	const { cartItems } = useAppSelector(s => s.cartReducer);
	const { city, wirehouse } = useAppSelector(s => s.deliveryReducer);
	const { products, total } = useAddToCartDrawer(cartItems);

	const [ shippingMethod, setShippingMethod ] = useState<number | string | null>(1);
	const [ paymentMethod, setPaymentMethod ] = useState<number | string | null>(1);

	const {
		submit,
		loading,
		phoneError,
		setPhoneError
	} = useCreateOrder();

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		submit({
			firstname: formData.get('firstname'),
			lastname: formData.get('lastname'),
			surname: formData.get('surname'),
			email: formData.get('email'),
			comment: formData.get('comment') || 'null',
			telephone: formData.get('phone'),
			shipping_method: shippingMethod,
			payment_method: paymentMethod,
			payment_address_1: wirehouse.label || 'null',
			payment_address_2: formData.get('address') || 'null',
			payment_city: city.label,
			ref_wirehouse: wirehouse.value,
			ref_city: city.value,
			total,
			products,
			fast: 0,
		});
	};

	return (
		<Form onSubmit={ onSubmit }>
			<div className='flex flex-col lg:flex-row gap-6'>
				<div className='flex-1 space-y-4'>
					<section className='bg-white p-6'>
						<h3 className='font-bold text-xl'>{ t('contact details') }</h3>

						<Input isRequired name='firstname' label={ t('firstname') }/>
						<Input isRequired name='lastname' label={ t('lastname') }/>
						<Input name='surname' label={ t('surname') }/>

						<PhoneInput
							error={ phoneError }
							onClearError={ setPhoneError }
						/>

						<Input name='email' type='email' label={ t('email') }/>
					</section>

					<section className='bg-white p-6'>
						<h3 className='font-bold text-xl'>{ t('delivery and payment') }</h3>

						{ (shippingMethod === '2' || shippingMethod === '3') && <NpCitySearch/> }

						{ shippingMethod === '3' && (
							<Input name='address' label={ t('address') }/>
						) }
					</section>

					<section className='bg-white p-6'>
						<h4 className='font-semibold'>{ t('add comment') }</h4>
						<Textarea name='comment' label={ t('your comment') }/>
					</section>
				</div>
			</div>
		</Form>
	);
}
