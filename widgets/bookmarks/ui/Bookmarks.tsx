'use client';

import { useTranslations } from 'next-intl';

import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Title } from '@/shared/ui/title';
import { Layout } from '@/shared/ui/layout/Layout';
import { useBookmarksProducts } from '@/features/bookmarks/model/useBookmarksProducts';
import { Spinner } from '@heroui/react';
import { NoResult } from '@/shared/ui/no-result';
import { ProductList } from '@/entities/product';

export function Bookmarks() {
	const t = useTranslations('common');
	const {
		tires,
		cargo,
		disks,
		battery,
		isLoading,
	} = useBookmarksProducts();
	const products = [...tires, ...cargo, ...disks, ...battery];

	const path = [
		{ title: t('favorites'), href: '/bookmarks', translations: false },
	];

	return <Layout size="lg">
		<Breadcrumbs path={ path }/>
		<Title title={ t('favorites') }/>
		{ (isLoading || (!products)) && (
			<div className="fixed inset-0 bg-white/60 z-20">
				<div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
					<Spinner size="lg"/>
				</div>
			</div>
		) }

		{ !products && !isLoading && <NoResult description='no result' /> }
		{ (products) && <ProductList
			classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
			products={ products }
		/> }
	</Layout>
}
