'use client';

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { useParams, useRouter } from 'next/navigation';
import { Button, Pagination as PaginationUI, PaginationItemRenderProps, PaginationItemType, PaginationItemValue } from '@heroui/react';

import { Locale } from '@/shared/types/locale';

interface Props {
	initialPage: number;
	total: number;
	offset: number;
}

export function Pagination({ initialPage, total, offset }: Props) {
	const { locale, section, slug } = useParams<{ locale: Locale, section: string, slug: string[] }>();
	const params = slug ? slug.filter(item => !item.startsWith('p-')).join('/') : '';
	const router = useRouter();
	const offsetValue = initialPage + offset;

	const onchange = (page: number) => {
		router.push(`/${ locale }/catalog/${ section }/p-${ page }/${ params }`);
	}

	const renderItem = ({ key, value, isActive, className }: PaginationItemRenderProps): ReactNode => {
		if(typeof value !== 'number') {
			if (value === PaginationItemType.DOTS) {
				return (
					<button key={key} className={twMerge(className, 'border-none shadow-none')}>
						...
					</button>
				);
			}

			return <span key={ key } className={ twMerge(className) }>{ value }</span>;
		}

		return (
			<Button
				key={ key }
				variant='bordered'
				className={ twMerge(
					className,
					'border-gray-400 text-black cursor-pointer dark:border-[#707070] dark:text-gray-50',
					((value > initialPage && value < offsetValue) || isActive) && 'text-white bg-primary border-primary hover:!bg-primary dark:border-primary',
				) }
				onPress={ () => onchange(value) }
			>
				{ value }
			</Button>
		);
	};

	return (
		<PaginationUI
			size='lg'
			initialPage={ initialPage }
			total={ total }
			variant='bordered'
			onChange={ (page: PaginationItemValue) => {
				if(typeof page === 'number') onchange(page);
			} }
			radius='sm'
			renderItem={ renderItem }
		/>
	);
}
