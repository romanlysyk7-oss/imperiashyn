'use client';

import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/shared/ui/button';
import { Link } from '@/shared/i18n/navigation';

interface Props {
	href: string;
	params: string;
	cleaned: string;
	handleClick: (href: string) => void;
}

export function SizeButton({ children, params, cleaned, href, handleClick, ...props }: PropsWithChildren<Props>) {
	return <Button
		as={ Link }
		href={ href }
		size='md'
		variant='light'
		color='default'
		onPress={ () => handleClick(href) }
		className={ twMerge('font-semibold px-2', params === cleaned && 'text-primary') }
		{ ...props }
	>
		{ children }
	</Button>;
}
