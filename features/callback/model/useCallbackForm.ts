'use client';

import { FormEvent, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { addToast } from '@heroui/toast';

import { useCreateCallbackMutation } from '@/entities/callback/api/callback.api';
import { formatPhoneNumber } from '@/shared/lib/phone/formatPhoneNumber';

interface Props {
	onClose?: () => void;
}

export function useCallbackForm({ onClose }: Props) {
	const t = useTranslations('callbackModal');
	const [ phoneError, setPhoneError ] = useState<string | null>(null);
	const [ createCallback, { isLoading } ] = useCreateCallbackMutation();
	const phoneRef = useRef<HTMLInputElement>(null);

	const onSubmit = async(event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const phoneRaw = formData.get('phone') as string;
		const name = formData.get('username') as string;
		const phone = formatPhoneNumber(phoneRaw);

		if(phone.length < 13) {
			setPhoneError('enter your phone number');
			return;
		}

		const res = await createCallback({
			phone,
			name: name ? name : '',
		}).unwrap();

		if(res.result) {
			onClose && onClose();
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
