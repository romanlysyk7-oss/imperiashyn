'use client';

import { NavbarItem } from '@heroui/react';

import { Link } from '@/shared/i18n/navigation';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';

interface Props {
	href: string;
	label: string;
}

export function NavigationItem({ href, label }: Props) {
	const { handleNavigation } = useNavigationProgress();

	return (
		<NavbarItem
			as={ Link }
			href={ href }
			onClick={ () => handleNavigation(href) }
			className="px-6 h-12 min-w-24 hover:bg-blue-600 inline-flex items-center justify-center"
		>
			{ label }
		</NavbarItem>
	);
}
