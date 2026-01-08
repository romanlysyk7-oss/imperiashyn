'use client';

import { Button as ButtonUI, ButtonProps } from '@heroui/button';
import { twMerge } from 'tailwind-merge';

export function Button({ children, color='primary', radius="sm", size='lg', className, ...props }: ButtonProps) {
	return <ButtonUI
		size={ size }
		radius={ radius }
		color={ color }
		className={ twMerge(size === 'lg' && 'uppercase font-bold', className, color === 'secondary' && 'text-black') }
		{ ...props }
	>
		{ children }
	</ButtonUI>
}
