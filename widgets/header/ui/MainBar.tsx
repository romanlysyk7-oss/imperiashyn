'use client';

import { Navbar } from '@heroui/react';
import { twMerge } from 'tailwind-merge';

import { MainBarLayout } from '@/widgets/header/ui/MainBarLayout';

import { HeaderMobileMenu } from './HeaderMobileMenu';
import { useHeaderMenu } from '../model/useHeaderMenu';
import styles from './index.module.scss';

export default function MainBar() {
	const menu = useHeaderMenu();

	return (
		<Navbar
			shouldHideOnScroll
			maxWidth="2xl"
			isMenuOpen={ menu.isMenuOpen }
			onMenuOpenChange={ menu.setIsMenuOpen }
			className='bg-white border-b relative'
			classNames={ { wrapper: twMerge('grid h-40 md:h-16 items-center justify-normal py-3 px-4 grid-cols-2 lg:grid-cols-[220px_auto_150px]', styles['container']) } }
		>
			<MainBarLayout />
			<HeaderMobileMenu { ...menu } />
		</Navbar>
	);
}
