import { Section } from '@/shared/types/section';
import { buildGa4Item } from '@/entities/product/analytics/lib/buildGa4Item';
import { pushDataLayer } from '@/shared/analytics/gtm/lib/pushDataLayer';

export const trackProductView = (
	id: number,
	name: string,
	brand: string,
	model: string,
	price: number,
	section: Section
) => {
	if(!id) return;

	pushDataLayer({
		event: 'view_item',
		ecommerce: {
			items: [
				buildGa4Item({
					id,
					name,
					brand,
					model,
					price,
					section,
				}),
			],
		},
	});
};
