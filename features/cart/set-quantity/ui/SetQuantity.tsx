import { Button } from '@/shared/ui/button';
import { NumberInput } from '@heroui/react';
import { SetQuantityParams } from '../model/types';
import { useSetQuantity } from '../model/useSetQuantity';

export function SetQuantity({ id, maxQuantity }: SetQuantityParams) {
	const { quantity, increment, decrement, set } =
		useSetQuantity(id, maxQuantity);

	return (
		<div className="flex gap-1.5 relative">
			<Button
				size="sm"
				isIconOnly
				color='default'
				disabled={ quantity === 1 }
				onPress={ decrement }
			>
				-
			</Button>

			<NumberInput
				size="sm"
				hideStepper
				aria-label="Amount"
				className="w-8"
				value={ quantity }
				minValue={ 1 }
				maxValue={ maxQuantity }
				onValueChange={ set }
			/>

			<Button
				size="sm"
				isIconOnly
				color='default'
				disabled={ quantity === maxQuantity }
				onPress={ increment }
			>
				+
			</Button>
		</div>
	);
}
