import { useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from '@/shared/i18n/navigation';

import { orderApi } from '@/entities/order/api/order.api';
import { formatPhoneNumber } from '@/shared/lib/phone/formatPhoneNumber';
import { reset } from '@/entities/cart/model/cart.slice';
import { resetStorage } from '@/shared/lib/locale-storage/localeStorage';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { Locale } from '@/shared/types/locale';
import { trackPurchase } from '@/features/checkout/analytics/trackPurchase';
import { ProductApi } from '@/entities/products/api/types';

export function useCreateOrder() {
	const locale = useLocale();
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { cartItems } = useAppSelector(state => state.cartReducer);

	const [ phoneError, setPhoneError ] = useState<string | null>(null);
	const [ loading, setLoading ] = useState(false);

	const { data: dataOrdersParam } = orderApi.useFetchOrdersParamQuery();
	const [ createOrder ] = orderApi.useCreateOrderMutation();

	const deliveryOption = dataOrdersParam?.Deliverys.map(item => {
		return { value: item.deliverys_id, label: locale === Locale.UK ? item.name : item.name_ru }
	});

	const paymentsOptions = dataOrdersParam?.Payments.map(item => {
		return { value: item.payments_id, label: locale === Locale.UK ? item.name : item.name_ru }
	});

	const paymentsDescription = dataOrdersParam?.Payments[2].descr;

	const submit = async(payload: any) => {
		setPhoneError(null);

		const products = payload.products.map((item: ProductApi) => {
			return {
				product_id: item.product_id,
				offer_id: item.best_offer.id,
				price: Number(item.best_offer.price),
				quantity: cartItems.find(i => i.id === item.best_offer.id)?.quantity,
			}
		});

		const phone = formatPhoneNumber(payload.telephone);
		if(phone.length < 13) {
			setPhoneError('enter your phone number');
			return;
		}

		setLoading(true);

		try {
			const response = await createOrder({
				...payload,
				products,
				telephone: phone,
			}).unwrap();

			if (response?.result) {
				dispatch(reset());
				resetStorage('reducerCart');
				router.push('/order/successful');
				trackPurchase(payload.products, cartItems, response?.order_id, payload.email, phone, payload.firstname, payload.lastname);
			}

			if (response?.linkpay) {
				window.open(response.linkpay, '_blank');
			}
		} finally {
			setLoading(false);
		}
	};

	return {
		submit,
		loading,
		phoneError,
		setPhoneError,
		deliveryOption,
		paymentsOptions,
		paymentsDescription
	};
}
