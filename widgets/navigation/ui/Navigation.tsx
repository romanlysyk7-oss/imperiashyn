'use client';

import { useTranslations } from 'next-intl';
import { NavbarContent } from '@heroui/react';

import { MAIN_NAVIGATION } from '@/features/navigation/model/navigation.config';
import { Section } from '@/shared/types/section';
import { DiskFilter, TireFilter } from '@/features/header-menu-filter';

import { SECTION_MENU } from '../model/navigation.const';
import { SectionMenu } from './SectionMenu';
import { NavigationItem } from './NavigationItem';

export function Navigation() {
	const t = useTranslations('navigation');

	return (
		<div className="relative bg-blue-500 hidden lg:block w-full">
			<div className="container mx-auto max-w-7xl">
				<NavbarContent justify='center' className="text-white text-lg font-semibold">
					{ SECTION_MENU.map(item => (
						<SectionMenu
							key={ item.section }
							label={ t(item.labelKey) }
							section={ item.section }
						>
							{({ onClose }) => (
								<>
									{ item.section === Section.Tires && <TireFilter onClose={ onClose } /> }
									{ item.section === Section.Disks && <DiskFilter onClose={ onClose } /> }
								</>
							)}
						</SectionMenu>
					)) }

					{ MAIN_NAVIGATION.map(item => (
						<NavigationItem
							key={ item.id }
							href={ item.href }
							label={ t(item.label) }
						/>
					)) }
				</NavbarContent>
			</div>
		</div>
	);
}
