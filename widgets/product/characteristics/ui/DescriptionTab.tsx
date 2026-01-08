'use client';

import { Locale } from '@/shared/types/locale';
import { Product } from '@/entities/product/model/types';
import { HtmlContent } from '@/shared/lib/sanitizeHtml';

interface Props {
	locale: Locale;
	product: Product;
}

export function DescriptionTab({ locale, product }: Props) {
	const html =
		locale === Locale.UK
			? product.descriptionUa
			: product.descriptionRu;

	return (
		<div className="my-6 md:my-4">
			<HtmlContent htmlString={ html || '' }/>
		</div>
	);
}
