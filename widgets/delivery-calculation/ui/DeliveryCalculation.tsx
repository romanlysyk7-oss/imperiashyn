'use client';

import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, } from '@heroui/react';

import { Button } from '@/shared/ui/button';
import { Quantity } from '@/widgets/product/ui/Quantity';

import { useDeliveryCalculation } from '../model/useDeliveryCalculation';
import { NpCitySearch } from '@/features/delivery/city-search';
import { NpDocumentPrice } from '@/features/delivery/document-price';

interface Props {
	offer_id?: number;
	quantity: number;
	price: number;
	setQuantity: Dispatch<SetStateAction<number>>;
}

export function DeliveryCalculation({ offer_id, quantity, price, setQuantity }: Props) {
	const {
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
	} = useDeliveryCalculation(setQuantity);

	return (
		<div className='delivery-calculation'>
			<Button
				variant="bordered"
				onPress={ onOpen }
				color='default'
				className="delivery-calculation bg-white text-black text-base font-semibold w-full md:w-72"
			>
				<Image src="/icons/truck.svg" width={ 48 } height={ 32 } alt=""/>
				{ t('delivery calculation') }
			</Button>

			<Modal
				radius='sm'
				isOpen={ isOpen }
				onOpenChange={ onOpenChange }
				placement="top-center"
			>
				<ModalContent>
					{ (onClose) => (
						<>
							<ModalHeader className="flex items-center gap-2">
								<Image
									src="/images/nova-poshta-logo-white-bg.png"
									width={ 18 }
									height={ 18 }
									alt=""
								/>
								{ t('delivery calculation') }
							</ModalHeader>

							<ModalBody>
								{ !showDescription && (
									<>
										<p>{ t('specify city') }</p>
										<NpCitySearch/>

										<p className="mt-4">{ t('specify quantity') }</p>
										<Quantity
											id={ 0 }
											quantity={ quantity }
											offerQuantity={ 99 }
											onChange={ onChange }
											setQuantity={ onSetQuantity }
										/>
									</>
								) }

								{ showDescription && city.value.length > 0 && (
									<NpDocumentPrice
										offer_id={ offer_id }
										quantity={ quantity }
										price={ price }
									/>
								) }
							</ModalBody>

							<ModalFooter>
								{ showDescription && (
									<Button variant="light" onPress={ onReset }>
										{ t('change') }
									</Button>
								) }

								<Button
									onPress={ showDescription ? onClose : onCalculate }
									color="primary"
								>
									{ t(showDescription ? 'close' : 'calculate') }
								</Button>
							</ModalFooter>
						</>
					) }
				</ModalContent>
			</Modal>
		</div>
	);
}
