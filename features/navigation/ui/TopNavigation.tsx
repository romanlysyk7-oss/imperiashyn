'use client';

import { NavbarContent, NavbarItem } from '@heroui/react';

import { Link } from "@/shared/i18n/navigation";
import { useLanguage } from '@/shared/hooks/useLanguage';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';
import type { AliasItem } from '@/entities/alias/model/alias.types';

export default function TopNavigation({ alias }: { alias: AliasItem[] }) {
	const lang = useLanguage();
	const { handleNavigation } = useNavigationProgress();

	return (
		<NavbarContent
			justify="center"
			className="h-8 gap-2 lg:gap-x-7 items-center hidden lg:flex"
		>
			{ alias.map((item, index) => (
				<NavbarItem
					key={ index }
					as={ Link }
					href={ `/page/${ item.slug }` }
					onClick={ () => handleNavigation(`/page/${ item.slug }`) }
					className="text-xs 2xl:text-sm font-medium uppercase"
				>
					{ item.descriptions[lang].title }
				</NavbarItem>
			)) }
		</NavbarContent>
	);
}
