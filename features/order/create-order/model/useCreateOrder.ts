import { useState } from 'react';
import { useLocale } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';

import { orderApi } from '@/entities/order/api/order.api';
import { formatPhoneNumber } from '@/shared/lib/phone/formatPhoneNumber';
import { reset } from '@/entities/cart/model/cart.slice';
import { resetStorage } from '@/shared/lib/locale-storage/localeStorage';
import { useAppDispatch } from '@/shared/hooks/redux';
import { Locale } from '@/shared/types/locale';

export function useCreateOrder() {
	const locale = useLocale();
	const router = useRouter();
	const params = useParams();
	const dispatch = useAppDispatch();

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

		const phone = formatPhoneNumber(payload.telephone);
		if(phone.length < 13) {
			setPhoneError('enter your phone number');
			return;
		}

		setLoading(true);

		try {
			const { data } = await createOrder({
				...payload,
				telephone: phone,
			}).unwrap();

			if(data?.linkpay) {
				window.open(data.linkpay, '_blank');
			}

			if(data?.result) {
				dispatch(reset());
				resetStorage('reducerCart');
				router.push(`/${ params.locale }/order/successful`);
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
