import { buildGa4Item } from '@/entities/product/analytics/lib/buildGa4Item';
import { pushDataLayer } from '@/shared/analytics/gtm/lib/pushDataLayer';
import { ProductApi } from '@/entities/products/api/types';
import { ProductItem } from '@/entities/products/model/types';

export const trackPurchase = (
	products: ProductApi[],
	cartItems: ProductItem[],
	orderId: number,
	email: string,
	phone: string,
	first_name: string,
	last_name: string,
) => {
	if (!products) return;

	const items = products.map(product => {
		const cart = cartItems.find(
			item => item.id === product.best_offer.id
		);

		return buildGa4Item({
			id: product.group,
			name: product.full_name,
			brand: product.brand_name,
			price: product.min_price,
			section: cart?.section,
			model: product.model.name,
			quantity: cart?.quantity ?? 1,
		});
	});

	const value = items.reduce(
		(sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 1),
		0
	);

	pushDataLayer({
		event: 'purchase',
		ecommerce: {
			transaction_id: orderId,
			affiliation: 'main',
			value,
			currency: 'UAH',
			items,
			email,
			phone_number: phone,
			first_name,
			last_name,
		},
	});
};
