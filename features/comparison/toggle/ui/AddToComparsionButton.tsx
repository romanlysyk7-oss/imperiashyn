'use client';

import { Button } from '@heroui/react';
import { twMerge } from 'tailwind-merge';
import * as Icons from '@/shared/ui/icons';
import { useToggleComparison } from '../model/useToggleComparison';
import { Section } from '@/shared/types/section';

interface Props {
	id: number;
	section: Section;
	isProduct?: boolean;
	isActiveBlock?: boolean;
}

export function AddToComparisonButton({ id, section, isProduct, isActiveBlock }: Props) {
	const { isComparison, toggle } = useToggleComparison({ id, section });

	return (
		<Button
			onPress={ toggle }
			isIconOnly
			aria-label="Add to comparison"
			radius="full"
			variant={ isProduct ? 'flat' : 'light' }
			className={ twMerge(
				'text-gray-500 hover:text-primary',
				isComparison && 'text-primary',
				isProduct && 'bg-gray-100/40 w-12 h-12 p-3',
				isActiveBlock && 'bg-blue-50 hover:bg-gray-100/60 w-12 h-12 p-3'
			) }
		>
			<Icons.LibraIcon />
		</Button>
	);
}
