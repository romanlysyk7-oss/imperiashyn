import { Button } from '@/shared/ui/button';
import * as Icons from '@/shared/ui/icons';
import { useRemoveFromCart } from '../model/useRemoveFromCart';

export function RemoveFromCart({ id }: { id: number}) {
	const { removeFromCart } = useRemoveFromCart( id );

	return (
		<Button
			isIconOnly={ true }
			variant='light'
			radius='full'
			size='sm'
			onPress={ removeFromCart }
		>
			<Icons.TrashIcon fill='gray-400' />
		</Button>
	)
}
