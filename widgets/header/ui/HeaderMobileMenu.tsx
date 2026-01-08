'use client';

import { useTranslations } from 'next-intl';
import { Accordion, AccordionItem, Divider, NavbarMenu, NavbarMenuItem } from '@heroui/react';

import { Link } from '@/shared/i18n/navigation';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';
import { MAIN_NAVIGATION } from '@/features/navigation/model/navigation.config';
import { DiskFilter, TireFilter } from '@/features/header-menu-filter';
import { Fragment } from 'react';

interface Props {
	closeAll: () => void;
}

export function HeaderMobileMenu({ closeAll }: Props) {
	const t = useTranslations('navigation');
	const { handleNavigation } = useNavigationProgress();

	const handleClick = (href: string) => {
		handleNavigation(href);
		closeAll();
	}

	return (
		<NavbarMenu className='mt-30 pt-2 px-1 md:px-6'>
			<Accordion>
				<AccordionItem
					key="1"
					aria-label={ t('cartires') }
					title={ t('cartires') }
					classNames={{ title: 'text-lg uppercase font-bold' }}
				>
					<div className='grid grid-cols-2 gap-2'>
						<TireFilter onClose={ handleClick } />
					</div>
				</AccordionItem>
				<AccordionItem
					key="2"
					aria-label={ t('cardiscs') }
					title={ t('cardiscs') }
					classNames={{ title: 'text-lg uppercase font-bold' }}
				>
					<div className='grid grid-cols-2 gap-2'>
						<DiskFilter onClose={ handleClick } />
					</div>
				</AccordionItem>
			</Accordion>
			<Divider />
			{ MAIN_NAVIGATION.map((item, index) => (
				<Fragment key={ index }>
					<NavbarMenuItem
						className='py-2 px-2 block uppercase font-bold'
					>
						<Link
							onClick={ () => handleClick(item.href) }
							href={ item.href }
						>
							{ t(item.label) }
						</Link>
					</NavbarMenuItem>
					<Divider />
				</Fragment>
			)) }
		</NavbarMenu>
	);
}
