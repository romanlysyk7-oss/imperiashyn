'use client';

import { ReactNode, useState } from 'react';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import * as Icons from '@/shared/ui/icons';
import { Button } from '@/shared/ui/button';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';
import { Link } from '@/features/header-menu-filter/ui/Link';
import { Section } from '@/shared/types/section';

interface Props {
	label: string;
	section: Section;
	children: (props: { onClose: (href: string) => void }) => ReactNode;
}

export function SectionMenu({ label, children, section }: Props) {
	const [ isOpen, setIsOpen ] = useState(false);
	const { handleNavigation } = useNavigationProgress();
	const t = useTranslations('headerMenuFilter');

	const onClose = (href: string) => {
		setIsOpen(false);
		handleNavigation(href);
	};

	return (
		<section
			onMouseEnter={ () => setIsOpen(true) }
			onMouseLeave={ () => setIsOpen(false) }
		>
			<Button
				color="primary"
				size="lg"
				radius="none"
				className="px-6 h-12 min-w-24 font-bold hover:bg-blue-600 normal-case"
				onPress={ () => setIsOpen(prev => !prev) }
				endContent={
					<Icons.ChevronDownIcon
						size={ 14 }
						strokeWidth="2"
						className={ twMerge(
							'stroke-white transition',
							isOpen && 'rotate-180'
						) }
					/>
				}
			>
				{ label }
			</Button>

			{ isOpen && (
				<div className="absolute left-0 top-12 z-30 w-full">
					<div className="w-full bg-white shadow-lg">
						<div className="mx-auto max-w-7xl grid grid-cols-4 pt-8 pb-2 px-4">
							{ children({ onClose }) }
						</div>
						<Link
							href={ `/catalog/${section}` }
							className='w-full'
							variant='solid'
							onClose={ () => onClose(`/catalog/${section}`) }
						>
							{ t(`all ${ section }`) }
						</Link>
					</div>
				</div>
			) }
		</section>
	);
}
