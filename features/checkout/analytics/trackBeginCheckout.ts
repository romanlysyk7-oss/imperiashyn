import { buildGa4Item } from '@/entities/product/analytics/lib/buildGa4Item';
import { pushDataLayer } from '@/shared/analytics/gtm/lib/pushDataLayer';
import { ProductApi } from '@/entities/products/api/types';
import { ProductItem } from '@/entities/products/model/types';

export const trackBeginCheckout = (
	products: ProductApi[],
	cartItems: ProductItem[]
) => {
	if(!products) return;

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

	pushDataLayer({
		event: 'begin_checkout',
		ecommerce: { items },
	});
};
