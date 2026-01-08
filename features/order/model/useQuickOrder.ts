'use client';

import { FormEvent, useRef, useState } from 'react';
import { addToast } from '@heroui/toast';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useTranslations } from 'next-intl';

import { orderApi } from '@/entities/order/api/order.api';
import { formatPhoneNumber } from '@/shared/lib/phone/formatPhoneNumber';
import type { ProductOffer } from '@/entities/product/api/types';

export function useQuickOrder(offerId: number, quantity: number, offerItem?: ProductOffer) {
	const t = useTranslations('order');
	const [ phoneError, setPhoneError ] = useState<string | null>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const [ createOrder, { isLoading } ] = orderApi.useCreateOrderMutation();

	const submit = async(event: FormEvent<HTMLFormElement>, onClose: () => void) => {
		event.preventDefault();

		const phone = new FormData(event.currentTarget).get('phone') as string;
		const formatted = formatPhoneNumber(phone);

		if(formatted.length < 13) {
			setPhoneError('enter your phone number');
			return;
		}

		const response = await createOrder({
			fast: 1,
			firstname: '',
			lastname: '',
			surname: '',
			email: '',
			telephone: formatted,
			total: Number(offerItem?.price) * quantity,
			comment: 'null',
			payment_method: 1,
			shipping_method: 1,
			payment_address_1: 'null',
			payment_address_2: 'null',
			payment_city: '',
			ref_wirehouse: '',
			ref_city: '',
			products: [
				{
					product_id: offerItem?.product_id,
					offer_id: offerId,
					price: Number(offerItem?.price),
					quantity,
				},
			],
		}).unwrap().catch((e: FetchBaseQueryError | SerializedError) => e);

		if((response as any)?.result) {
			addToast({
				title: t('sent order'),
				description: t('our manager'),
			});

			if((response as any)?.linkpay) {
				window.open((response as any).linkpay, '_blank');
			}

			onClose();
		}
	};

	return {
		t,
		phoneRef,
		phoneError,
		setPhoneError,
		isLoading,
		submit,
	};
}
