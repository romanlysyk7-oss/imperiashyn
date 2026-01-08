import { ReactNode } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { Section } from '@/shared/types/section';

interface Props {
	children: ReactNode;
	section: Section;
}

export function FilterLayout({ children, section }: Props) {
	return (
		<div className='mt-10'>
			<Image width={ 500 } height={ 150 } src={ `/images/home-filter/${ section }.png` } alt='' className='mx-auto' />
			<div className={
				twMerge(
					'pt-20 py-6 px-5 border',
					section === Section.Tires && 'rounded-l-sm bg-primary border-primary',
					section === Section.Disks && 'rounded-r-sm bg-white border-[#DCE1E5]'
				) }
			>
				{ children }
			</div>
		</div>
	)
}
