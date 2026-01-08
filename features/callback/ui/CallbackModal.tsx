'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';
import { Form, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@heroui/react';

import { PhoneInput } from '@/shared/ui/phone-input';
import { useCallbackForm } from '../model/useCallbackForm';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input/Input';
import * as Icons from '@/shared/ui/icons';

interface Props {
	productId?: number;
	quantity: number;
	color?: 'default' | 'primary';
	isProductPage?: boolean;
}

export function CallbackModal({ productId, quantity, color = 'default', isProductPage }: Props) {
	const t = useTranslations('callbackModal');
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const {
		phoneRef,
		phoneError,
		setPhoneError,
		onSubmit,
		isLoading,
	} = useCallbackForm({ productId, quantity });

	useEffect(() => {
		if(isOpen) {
			setTimeout(() => phoneRef.current?.focus(), 100);
		}
	}, [ isOpen, phoneRef ]);

	return (
		<>
			{ isProductPage ?
				<button onClick={ onOpen } aria-label='mail' className='group relative'>
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full w-12 h-12 bg-sky-500 p-3">
						<Icons.PhoneCircuitIcon className='stroke-white'/>
					</span>
				</button> :
				<Button
					onPress={ onOpen }
					variant={ color === 'default' ? 'light' : 'solid' }
					size={ color === 'default' ? 'md' : 'lg' }
					color={ color }
					className={ twMerge('text-white font-semibold', color === 'default' && 'h-6') }
				>
					{ t('callback') }
				</Button> }
			<Modal
				isOpen={ isOpen }
				onOpenChange={ onOpenChange }
				placement="top-center"
				radius='sm'
			>
				<ModalContent>
					<>
						<ModalHeader>
							<h3 className="uppercase font-semibold">{ t('callback') }</h3>
						</ModalHeader>

						<ModalBody>
							<Form className="flex flex-col gap-4" onSubmit={ onSubmit }>
								<p className="text-sm text-gray-500">{ t('put phone') }</p>

								<Input
									isRequired
									name="username"
									label={ t('your name') }
									errorMessage={ t('this field is required') }
								/>

								<PhoneInput error={ phoneError } onClearError={ setPhoneError }/>

								<Button
									type="submit"
									isLoading={ isLoading }
									className="ml-auto"
								>
									{ t('send') }
								</Button>
							</Form>
						</ModalBody>
					</>
				</ModalContent>
			</Modal>
		</>
	);
}
