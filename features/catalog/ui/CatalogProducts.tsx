'use client';

import { Spinner } from '@heroui/react';
import { Locale, useTranslations } from 'next-intl';

import { useCatalogProducts } from '../model/useCatalogProducts';
import { Section } from '@/shared/types/section';
import { Pagination } from './Pagination';
import { ProductList } from '@/entities/product';
import { NoResult } from '@/shared/ui/no-result';
import { Button } from '@/shared/ui/button';

interface Props {
	searchParams: string;
	pageFrom: number | null;
	section: Section;
	slug?: string[];
	locale: Locale;
	pageItem: number;
}

export function CatalogProducts(props: Props) {
	const t = useTranslations('catalog');

	const {
		products,
		isLoading,
		isFetching,
		offset,
		setOffset,
		canShowMore,
		totalPages,
		currentPage,
	} = useCatalogProducts(props);

	return (
		<>
			{ (isLoading || (!products && isFetching)) && (
				<div className="fixed inset-0 bg-white/60 z-20">
					<div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
						<Spinner size="lg"/>
					</div>
				</div>
			) }

			{ !products && !isLoading && !isFetching && <NoResult description='no result' /> }
			{ (products) && <ProductList
				classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
				products={ products.products }
			/> }

			{ products && canShowMore && (
				<Button
					variant="bordered"
					size="lg"
					radius="sm"
					color='default'
					className="mt-8 w-full"
					onPress={ () => setOffset(prev => prev + 1) }
				>
					{ t('show more') }
				</Button>
			) }

			{ products && totalPages > 1 && (
				<div className="mt-10">
					<Pagination
						initialPage={ currentPage }
						offset={ offset }
						total={ totalPages }
					/>
				</div>
			) }
		</>
	);
}
