import { Section } from '@/shared/types/section';
import { buildGa4Item } from '@/entities/product/analytics/lib/buildGa4Item';
import { pushDataLayer } from '@/shared/analytics/gtm/lib/pushDataLayer';

export const trackAddToCart = (
	id: number,
	data: {
		name: string,
		brand: string,
		model: string,
		price: number,
	},
	section: Section,
	quantity: number
) => {
	if(!id) return;

	pushDataLayer({
		event: 'add_to_cart',
		ecommerce: {
			items: [
				buildGa4Item({
					id,
					name: data.name,
					brand: data.brand,
					price: data.price,
					model: data.model,
					section,
					quantity,
				}),
			],
		},
	});
};
