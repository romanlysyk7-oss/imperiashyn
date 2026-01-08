'use client';

import { Form, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@heroui/react';
import { Button } from '@/shared/ui/button';
import { PhoneInput } from '@/shared/ui/phone-input';

import { useQuickOrder } from '../model/useQuickOrder';
import type { QuickOrderProps } from '../model/types';

export function QuickOrder({ offerId, quantity, offerItem }: QuickOrderProps) {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

	const {
		t,
		phoneRef,
		phoneError,
		setPhoneError,
		isLoading,
		submit,
	} = useQuickOrder(offerId, quantity, offerItem);

	return (
		<>
			<Button
				onPress={ onOpen }
				variant="bordered"
				className="w-full lg:w-72 uppercase font-bold"
			>
				{ t('quick order') }
			</Button>

			<Modal isOpen={ isOpen } onOpenChange={ onOpenChange } radius="sm">
				<ModalContent>
					{ () => (
						<>
							<ModalHeader>
								<h3 className="uppercase font-semibold">
									{ t('quick order') }
								</h3>
							</ModalHeader>

							<ModalBody>
								<p className="text-sm text-gray-500">
									{ t('quick order text') }
								</p>

								<Form
									onSubmit={ (e) => submit(e, onClose) }
									className="flex flex-col gap-4 mt-4"
								>
									<PhoneInput
										ref={ phoneRef }
										error={ phoneError }
										onClearError={ setPhoneError }
									/>

									<Button
										type="submit"
										isLoading={ isLoading }
										className="ml-auto uppercase font-bold"
									>
										{ t('send') }
									</Button>
								</Form>
							</ModalBody>
						</>
					) }
				</ModalContent>
			</Modal>
		</>
	);
}
