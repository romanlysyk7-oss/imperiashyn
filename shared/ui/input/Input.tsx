import { Input as InputUI, InputProps } from "@heroui/input";

export function Input(props: InputProps) {
	return (
		<InputUI
			{ ...props }
			size='md'
			radius='sm'
			variant='bordered'
		/>
	)
}
