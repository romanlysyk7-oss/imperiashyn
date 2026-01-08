import { useTranslations } from 'next-intl';
import { useAppSelector } from '@/shared/hooks/redux';
import { deliveryApi } from '@/entities/delivery/api/delivery.api';
import { calculatePostpaid, formatPrice } from './calculatePostpaid';

interface Params {
	offerId?: number;
	quantity: number;
	price: number;
}

export function useNpDocumentPrice({ offerId, quantity, price }: Params) {
	const t = useTranslations('delivery');
	const { city } = useAppSelector(state => state.deliveryReducer);

	const { data, isLoading } =
		deliveryApi.useFetchNpDocumentPriceQuery(
			{
				offer_id: offerId,
				ref: city.value,
				count: quantity,
			},
			{ skip: !city.value || !offerId }
		);

	const deliveryCost = data?.[0]?.Cost ?? 0;
	const totalWithPostpaid = calculatePostpaid(
		price,
		quantity,
		deliveryCost
	);

	return {
		t,
		isLoading,
		hasData: Boolean(data?.length),
		deliveryCost,
		totalWithPostpaid: formatPrice(totalWithPostpaid),
	};
}
