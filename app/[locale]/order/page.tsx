import { Layout } from '@/shared/ui/layout/Layout';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Title } from '@/shared/ui/title';
import { OrderForm } from '@/widgets/order-form/ui/OrderForm';

export default function OrderPage() {
	const path = [
		{ title: 'cart', href: '/cart', translations: true },
		{ title: 'placing an order', href: '/', translations: true },
	];

	return (
		<Layout>
			<div className='max-w-5xl mx-auto'>
				<Breadcrumbs path={ path }/>
				<Title title='placing an order' translations/>
				<OrderForm/>
			</div>
		</Layout>
	);
}
