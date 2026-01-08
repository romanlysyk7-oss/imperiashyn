import { JSX, ReactNode, RefObject } from 'react';
import { useTranslations } from 'next-intl';
import { Listbox, ListboxItem } from "@heroui/react";

import { Button } from '@/shared/ui/button';
import { Link } from '@/shared/i18n/navigation';
import { ProductApi } from '@/entities/products/api/types';

export const ListboxWrapper = ({ children, ref }: { children: ReactNode, ref: RefObject<HTMLDivElement | null> }) => (
	<div
		ref={ ref }
		className="absolute w-full max-w-[600] border-small px-6 py-4 rounded-small bg-zinc-700 z-10">
		{ children }
	</div>
);

interface Props {
	products: ProductApi[] | undefined;
	totalCount: number;
	isOpen: boolean;
	onResults: () => void;
	dropdownRef: RefObject<HTMLDivElement | null>;
	href: string;
}

export function SearchResults({ products, isOpen, totalCount, dropdownRef, onResults, href }: Props): JSX.Element | null {
	const t = useTranslations('catalog');

	if(!products || !isOpen) return null;

	return (
		<ListboxWrapper ref={ dropdownRef }>
			<Listbox aria-label="Search list" color='primary' items={ products } emptyContent={ t('no result by search') }>
				{ (product) => (
					<ListboxItem
						as={ Link }
						key={ product.group }
						href={ product.page_url }
						onPress={ onResults }
						className='text-white'
					>
						{ product.full_name }
					</ListboxItem>
				) }
			</Listbox>
			{ products.length > 1 && <div className='text-center py-2'>
				<Button
					as={ Link }
					className='min-w-80'
					onPress={ onResults }
					href={ href }
				>
					{ t('all search result') + ' ' }
					{ totalCount > 0 && <>({ totalCount })</> }
				</Button>
			</div> }
		</ListboxWrapper>
	)
}
