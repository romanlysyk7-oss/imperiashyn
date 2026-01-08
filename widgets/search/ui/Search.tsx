'use client';

import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Spinner } from '@heroui/react';

import { useCatalogProducts } from '@/features/catalog/model/useCatalogProducts';
import { NoResult } from '@/shared/ui/no-result';
import { ProductList } from '@/entities/product';
import { Button } from '@/shared/ui/button';

const itemsProduct = 12;

export function Search() {
	const t = useTranslations('catalog');
	const searchParams = useSearchParams();
	const search = searchParams.get('name');

	const {
		products,
		isLoading,
		isFetching,
		setOffset,
		canShowMore,
	} = useCatalogProducts({ searchParams: `?name=${ search }`, pageItem: itemsProduct });

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
				classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
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
		</>
	)
}
