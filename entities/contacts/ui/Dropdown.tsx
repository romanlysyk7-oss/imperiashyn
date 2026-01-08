'use client';

import Image from 'next/image';
import { Dropdown as DropdownUI, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';

import { Button } from '@/shared/ui/button';
import { ChevronDownIcon, PhoneIcon } from '@/shared/ui/icons';
import type { Phone as PhoneType } from '@/shared/types/settings';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

interface ContactsDropdownProps {
	phones: PhoneType[];
	isInfoBlock?: boolean
}

export default function ContactsDropdown({ phones, isInfoBlock }: ContactsDropdownProps) {
	const t = useTranslations('common');
	const mainPhone = phones[0];

	return (
		<DropdownUI radius="sm">
			<DropdownTrigger>
				<Button
					size="sm"
					variant="light"
					className={ twMerge("text-sm h-10 md:h-8 px-0", isInfoBlock ? 'text-black' : 'text-white') }
					startContent={ <div className={ twMerge('p-2 lg:p-0 rounded-full', !isInfoBlock && 'bg-blue-500 lg:bg-transparent') }>
						<PhoneIcon size={ 21 } className={ twMerge("md:text-primary", isInfoBlock && 'text-primary') }/>
					</div> }
					endContent={ <ChevronDownIcon size={ 10 } className={ isInfoBlock ? 'stroke-black' : 'stroke-white' }/> }
				>
					<span className={ twMerge("font-bold uppercase", !isInfoBlock && 'hidden md:inline ') }>
						{ isInfoBlock ? t('phones') : mainPhone.phone }
					</span>
				</Button>
			</DropdownTrigger>

			<DropdownMenu aria-label="Contacts">
				{ phones.map(({ phone, url, operator }) => (
					<DropdownItem
						key={ phone }
						href={ `tel:${ url }` }
						startContent={
							<Image
								width={ 20 }
								height={ 20 }
								src={ `/icons/${ operator }-logo.svg` }
								alt={ operator }
							/>
						}
					>
						{ phone }
					</DropdownItem>
				)) }
			</DropdownMenu>
		</DropdownUI>
	);
};
