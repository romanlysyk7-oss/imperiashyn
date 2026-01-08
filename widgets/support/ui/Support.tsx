'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Form } from '@heroui/form';

import { useCallbackForm } from '@/features/callback/model/useCallbackForm';
import { PhoneInput } from '@/shared/ui/phone-input';
import { Button } from '@/shared/ui/button';

export function Support() {
	const t = useTranslations('support');
	const {
		phoneError,
		setPhoneError,
		onSubmit,
		isLoading,
	} = useCallbackForm({ productId: 1, quantity: 1 });

	return (
		<Form onSubmit={ onSubmit } className='mt-56 md:mt-16 bg-[#EAF1FF] flex justify-between flex-col-reverse md:flex-row px-8 md:px-20 relative'>
			<div className='py-10 flex justify-center flex-col md:w-1/2'>
				<h3 className='text-4xl font-bold'>
					{ t('help needed') }
				</h3>
				<p className='text-xl mt-6'>
					{ t('contact our experts') }
				</p>
				<div className='flex mt-8 flex-col md:flex-row gap-4 md:gap-0 items-center'>
					<PhoneInput error={ phoneError } onClearError={ setPhoneError } />
					<Button
						type='submit'
						className='w-full h-14 md:-ml-2'
						radius='none'
						isLoading={ isLoading }
					>
						{ t('request a call') }
					</Button>
				</div>
			</div>
			<div className='absolute md:static bottom-full left-2/4 -translate-x-2/4 md:translate-x-0 max-w-72 md:max-w-max'>
				<Image width={ 412 } height={ 380 } src='/images/support/man.png' alt='' loading='lazy' />
			</div>
		</Form>
	)
}
