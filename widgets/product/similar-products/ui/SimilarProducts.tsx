'use client';

import { Section } from '@/shared/types/section';
import { buildSimilarProductsQuery } from '@/entities/product/lib/buildSimilarProductsQuery';

import { Title } from '@/shared/ui/title';

import { Spinner } from '@heroui/react';
import { ProductList } from '@/entities/product';
import { ProductOfferGroup } from '@/entities/product/api/types';
import { productApi } from '@/entities/products/api/product.api';

interface Props {
	offerGroup: ProductOfferGroup;
	section: Section;
}

export function SimilarProducts({ offerGroup, section }: Props) {
	const query = buildSimilarProductsQuery(offerGroup, section);

	const { data, isLoading } = productApi.useFetchProductsQuery({
		id: query,
		length: 4,
	});

	if(!data?.result || isLoading) return <Spinner />;

	return (
		<section>
			<Title title="similar products" translations/>

			{ data?.result && (
				<ProductList
					classnames="grid-cols-1 lg:grid-cols-2 lg:grid-cols-4 px-3 lg:px-0"
					products={ data.data.products }
				/>
			) }
		</section>
	);
}
