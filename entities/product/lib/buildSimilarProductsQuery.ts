import { Section } from '@/shared/types/section';
import { ProductOfferGroup } from '@/entities/product/api/types';

export function buildSimilarProductsQuery(
	offerGroup: ProductOfferGroup,
	section: Section
): string {
	const params: string[] = [];

	const push = (key: string, value?: string | number) => {
		if(value !== undefined && value !== null) {
			params.push(`${ key }=${ value }`);
		}
	};

	if(section === Section.Disks) {
		push('width', offerGroup.width);
		push('radius', offerGroup.diameter);
		push('typedisk', offerGroup.id_typedisc);
		return `?typeproduct=3&${ params.join('&') }`;
	}

	push('width', offerGroup.width);
	push('height', offerGroup.height);
	push('radius', offerGroup.diameter);

	return `?${ params.join('&') }`;
}
