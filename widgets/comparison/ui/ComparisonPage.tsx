'use client';

import { useTranslations } from 'next-intl';
import { Spinner } from '@heroui/react';

import { Layout } from '@/shared/ui/layout/Layout';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Title } from '@/shared/ui/title';
import { NoResult } from '@/shared/ui/no-result';

import { useComparisonProducts } from '@/features/comparison/model/useComparisonProducts';
import { ComparisonTabs } from '../comparison-tabs/ui/ComparisonTabs';

export default function Comparison() {
	const t = useTranslations('common');

	const {
		tires,
		cargo,
		disks,
		battery,
		isLoading,
	} = useComparisonProducts();

	const path = [
		{ title: t('comparison'), href: '/comparison', translations: false },
	];

	const hasItems =
		tires.length || cargo.length || disks.length || battery.length;

	return (
		<Layout size="lg">
			<Breadcrumbs path={ path }/>
			<Title title={ t('comparison') }/>

			{ hasItems ? (
				<section className="mt-4 md:mt-8">
					{ isLoading && <Spinner /> }
					<ComparisonTabs
						tires={ tires }
						cargo={ cargo }
						disks={ disks }
						battery={ battery }
					/>
				</section>
			) : (
				<NoResult description="any products to comparison yet"/>
			) }
		</Layout>
	);
}
