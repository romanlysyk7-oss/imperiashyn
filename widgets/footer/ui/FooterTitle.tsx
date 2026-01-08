interface Props {
	title: string;
}

export function FooterTitle({ title }: Props) {
	return (
		<h6 className="text-gray-500 text-sm font-bold">
			{ title }
		</h6>
	);
}
