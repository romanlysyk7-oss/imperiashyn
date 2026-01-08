'use client';

import { Spinner } from '@heroui/react';

import { Section } from '@/shared/types/section';
import { productApi } from '@/entities/products/api/product.api';
import { resolveTypeProduct } from '@/entities/product/lib/resolveTypeProduct';
import { ModelSizeItem } from '@/entities/product/ui/ModelSizeItem';

interface Props {
	section: Section;
	brand?: number;
	model?: number;
	diameter?: string;
	vehicle_type?: string | false;
}

export function OtherModelSizes({ section, brand, model, diameter, vehicle_type }: Props) {
	const typeProduct = resolveTypeProduct(vehicle_type);

	const query =
		section === Section.Tires
			? `?brand=${ brand }&model_id=${ model }&vehicle_type=${ vehicle_type }&${ typeProduct }`
			: `?typeproduct=3&brand=${ brand }&model_id=${ model }`;

	const { data, isLoading } = productApi.useFetchProductsQuery({
		id: query,
		length: 40,
	});

	if(isLoading || !data?.result) {
		return <Spinner size="lg"/>;
	}

	const products = data.data.products;

	const sorted = [
		...products.filter(p => p.diameter === diameter),
		...products.filter(p => p.diameter !== diameter),
	].slice(0, 12);

	return (
		<section className="mt-8 py-10 border-t border-[#DEE2EB]">
			<h4 className="text-lg font-bold">
				Інші розміри цієї моделі
			</h4>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
				{ sorted.map(item => (
					<ModelSizeItem
						key={ item.group }
						section={ section }
						brand={ item.brand }
						model={ item.model_id }
						modelName={ item.model.name }
						width={ item.width }
						height={ item.height }
						diameter={ item.diameter }
					/>
				)) }
			</div>
		</section>
	);
}
