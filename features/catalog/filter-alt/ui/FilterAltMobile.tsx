'use client';

import { useTranslations } from 'next-intl';
import { Drawer, DrawerBody, DrawerContent, useDisclosure, } from "@heroui/react";

import { FilterContent } from '@/features/catalog/filter-alt/ui/FilterContent';
import { Button } from '@/shared/ui/button';
import * as Icons from '@/shared/ui/icons';

import { FilterAltProps } from '../model/types';

export function FilterAltMobile({ ...props }: FilterAltProps) {
	const t = useTranslations('filters');
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button
				variant='light'
				onPress={ onOpen }
				size='md'
				color='default'
				className='font-bold text-base'
				startContent={ <Icons.FilterIcon /> }
			>
				{ t('filters') }
			</Button>
			<Drawer
				isOpen={ isOpen }
				onOpenChange={ onOpenChange }
				placement='left'
				radius='none'
			>
				<DrawerContent>
					{ () => (
						<>
							<DrawerBody>
								<FilterContent { ...props } />
							</DrawerBody>
						</>
					) }
				</DrawerContent>
			</Drawer>
		</>
	)
}
