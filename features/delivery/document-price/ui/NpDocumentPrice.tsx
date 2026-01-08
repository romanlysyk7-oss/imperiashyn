'use client';

import { Spinner } from '@heroui/react';
import { useNpDocumentPrice } from '../model/useNpDocumentPrice';

interface Props {
	offer_id?: number;
	quantity: number;
	price: number;
}

export function NpDocumentPrice({ offer_id, quantity, price }: Props) {
	const {
		t,
		isLoading,
		hasData,
		deliveryCost,
		totalWithPostpaid,
	} = useNpDocumentPrice({
		offerId: offer_id,
		quantity,
		price,
	});

	if(isLoading || !hasData) {
		return <Spinner/>;
	}

	return (
		<>
			<p className="mt-4">
				{ t('estimated shipping') } { quantity } шт.
			</p>

			<h3 className="text-base font-semibold mt-6">
				{ t('cost') }: { deliveryCost } грн
			</h3>

			<h3 className="text-base font-semibold mt-3">
				{ t('with cash') }: { totalWithPostpaid } грн
			</h3>
		</>
	);
}
