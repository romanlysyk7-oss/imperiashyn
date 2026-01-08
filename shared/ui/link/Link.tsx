import { Link as LinkUI, LinkProps } from '@heroui/link';

export function Link({ children, color='primary', className, ...props }: LinkProps) {
	return (
		<LinkUI
			className={ className }
			{ ...props }
		>
			{ children }
		</LinkUI>
	)
}
