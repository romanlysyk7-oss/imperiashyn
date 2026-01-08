import { Button } from '@/shared/ui/button';
import { Link } from '@/shared/i18n/navigation';

interface Props {
	section: string;
	brand?: number;
	model?: number;
	width?: string | null;
	height?: string | null;
	diameter?: string | null;
	modelName: string;
}

export function ModelSizeItem({ section, brand, model, width, height, diameter, modelName, }: Props) {
	const href = `/catalog/${ section }/b-${ brand }/m-${ model }/w-${ width }/d-${ diameter }${
		height ? `/h-${ height }` : ''
	}`;

	return (
		<Button
			as={ Link }
			variant="bordered"
			color="primary"
			radius="full"
			size="md"
			href={ href }
		>
			{ `${ modelName } ${ width }${ height ? `/${ height }` : '' } R${ diameter }` }
		</Button>
	);
}
