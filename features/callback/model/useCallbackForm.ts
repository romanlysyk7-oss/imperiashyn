'use client';

import { FormEvent, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { addToast } from '@heroui/toast';

import { useCreateCallbackMutation } from '@/entities/callback/api/callback.api';
import { CallbackPayload } from './types';
import { formatPhoneNumber } from '@/shared/lib/phone/formatPhoneNumber';

export function useCallbackForm({ productId, quantity }: CallbackPayload) {
	const t = useTranslations('callbackModal');
	const [ phoneError, setPhoneError ] = useState<string | null>(null);
	const [ createCallback, { isLoading } ] = useCreateCallbackMutation();
	const phoneRef = useRef<HTMLInputElement>(null);

	const onSubmit = async(event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const phoneRaw = formData.get('phone') as string;
		const firstname = formData.get('username') as string;
		const phone = formatPhoneNumber(phoneRaw);

		if(phone.length < 13) {
			setPhoneError('enter your phone number');
			return;
		}

		const res = await createCallback({
			phone,
			firstname,
			product_id: productId?.toString() || '1',
			quantity: quantity.toString(),
		}).unwrap();

		if(res.result) {
			addToast({
				title: t('sent message'),
				description: t('our manager'),
			});
		}
	};

	return {
		phoneRef,
		phoneError,
		setPhoneError,
		onSubmit,
		isLoading,
	};
}
