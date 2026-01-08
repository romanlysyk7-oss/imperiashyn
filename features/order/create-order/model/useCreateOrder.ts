import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { orderApi } from '@/entities/order/api/order.api';
import { formatPhoneNumber } from '@/shared/lib/phone/formatPhoneNumber';
import { reset } from '@/entities/cart/model/cart.slice';
import { resetStorage } from '@/shared/lib/locale-storage/localeStorage';
import { useAppDispatch } from '@/shared/hooks/redux';

export function useCreateOrder() {
	const router = useRouter();
	const params = useParams();
	const dispatch = useAppDispatch();

	const [ phoneError, setPhoneError ] = useState<string | null>(null);
	const [ loading, setLoading ] = useState(false);

	const [ createOrder ] = orderApi.useCreateOrderMutation();

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
	};
}
