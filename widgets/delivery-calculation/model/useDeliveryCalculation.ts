import { Dispatch, SetStateAction, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useDisclosure } from '@heroui/react';

import { useAppSelector } from '@/shared/hooks/redux';

export function useDeliveryCalculation(setQuantity: Dispatch<SetStateAction<number>>) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const { city } = useAppSelector(state => state.deliveryReducer);
	const [ showDescription, setShowDescription ] = useState(false);
	const t = useTranslations('delivery');

	const onSetQuantity = (_: number, value: number) => {
		setQuantity(value);
	};

	const onChange = (e: { target: HTMLInputElement }) => {
		const numericValue = Number(e.target.value.replace(/\D/g, ''));
		setQuantity(numericValue < 99 ? numericValue : 99);
	};

	const onCalculate = () => setShowDescription(true);
	const onReset = () => setShowDescription(false);

	return {
		t,
		city,
		isOpen,
		onOpen,
		onOpenChange,
		showDescription,
		onSetQuantity,
		onChange,
		onCalculate,
		onReset,
	};
}
