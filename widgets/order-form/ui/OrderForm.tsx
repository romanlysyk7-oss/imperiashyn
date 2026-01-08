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
import { Summary } from '@/widgets/order-summary/ui/Summary';
import { Autocomplete } from '@/features/catalog-filter-by-car/ui/Autocomplete';
import { HtmlContent } from '@/shared/lib/sanitizeHtml';
import { NpWarehousesSearch } from '@/features/delivery/np-arehouses-search';

export function OrderForm() {
	const t = useTranslations('order');

	const { cartItems } = useAppSelector(s => s.cartReducer);
	const { city, wirehouse } = useAppSelector(s => s.deliveryReducer);
	const { products, total, isLoading } = useAddToCartDrawer(cartItems);

	const [ shippingMethod, setShippingMethod ] = useState<number | string | null>(1);
	const [ paymentMethod, setPaymentMethod ] = useState<number | string | null>(1);

	const {
		submit,
		loading,
		phoneError,
		setPhoneError,
		deliveryOption,
		paymentsOptions,
		paymentsDescription
	} = useCreateOrder();

	const onChange = (name: string, value: number | string | null) => {
		if(name === 'shipping_method') {
			setShippingMethod(value);
		} else if(name === 'payment_method') {
			setPaymentMethod(value);
		}
	}

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
		<Form onSubmit={ onSubmit } className='lg:flex-row gap-6'>
			<div className='flex-1 space-y-4 w-full'>
				<section className='bg-white p-6 flex flex-col gap-4'>
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

				<section className='bg-white p-6 flex flex-col gap-4'>
					<h3 className='font-bold text-xl'>{ t('delivery and payment') }</h3>
					<Autocomplete
						name='shipping_method'
						label={ t('delivery method') }
						options={ deliveryOption }
						onChange={ onChange }
						variant='bordered'
						size='md'
					/>

					{ (shippingMethod === '2' || shippingMethod === '3') && <NpCitySearch /> }
					{ shippingMethod === '2' && city.value.length > 0 && <NpWarehousesSearch /> }

					{ shippingMethod === '3' && (
						<Input name='address' label={ t('address') }/>
					) }

					<h4 className='font-semibold mt-6'>
						{ t('choose a payment method') }
					</h4>

					<Autocomplete
						name='payment_method'
						label={ t('payment method') }
						options={ paymentsOptions }
						onChange={ onChange }
						variant='bordered'
						size='md'
					/>
					{ Number(paymentMethod) === 3 && (
						paymentsDescription && (
							<div className='mt-4'>
								<HtmlContent htmlString={ paymentsDescription || '' }/>
							</div>
						)) }
				</section>

				<section className='bg-white p-6 flex flex-col gap-4'>
					<h4 className='font-semibold'>{ t('add comment') }</h4>
					<Textarea variant='bordered' radius='sm' name='comment' label={ t('your comment') }/>
				</section>
			</div>
			<Summary products={ products } isLoading={ isLoading } total={ total } loading={ loading } />
		</Form>
	);
}
