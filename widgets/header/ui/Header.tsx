'use client'

import { Navbar } from '@heroui/react';

import { Navigation } from '@/widgets/navigation';
import type { AliasItem } from '@/entities/alias/model/alias.types';
import type { ConfigSettings } from '@/shared/types/settings';

import { TopBar } from './TopBar';
import { useHeaderMenu } from '../model/useHeaderMenu';
import { MainBarLayout } from './MainBarLayout';
import { HeaderMobileMenu } from './HeaderMobileMenu';

interface Props {
	alias: AliasItem[];
	settingsData: ConfigSettings;
}

export function Header({ alias, settingsData }: Props) {
	const menu = useHeaderMenu();

	return (
		<Navbar
			maxWidth='full'
			shouldHideOnScroll
			isMenuOpen={ menu.isMenuOpen }
			onMenuOpenChange={ menu.setIsMenuOpen }
			classNames={{ wrapper: 'p-0 flex-col gap-0 h-46 md:h-42' }}
		>
			<TopBar alias={ alias } settingsData={ settingsData } />
			<MainBarLayout />
			<Navigation />
			<HeaderMobileMenu { ...menu } />
		</Navbar>
	);
}
