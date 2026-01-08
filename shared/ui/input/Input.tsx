import { Input as InputUI, InputProps } from "@heroui/input";

export function Input(props: InputProps) {
	return (
		<InputUI
			{ ...props }
			size='lg'
			radius='sm'
			variant='bordered'
		/>
	)
}
