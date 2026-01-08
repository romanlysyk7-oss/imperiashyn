import { useTranslations } from 'next-intl';

import { Link } from '@/features/header-menu-filter/ui/Link';
import { TYPE_CAR } from '../model/navigation.const';
import { twMerge } from 'tailwind-merge';

interface Props {
	onClose: (href: string) => void;
	isCatalog?: boolean;
}

export function TypeCarFilter({ onClose, isCatalog }: Props) {
	const t = useTranslations('carType');

	return (
		<section className={ twMerge("grid grid-cols-1 justify-items-start", isCatalog && 'flex gap-2') }>
			{ TYPE_CAR.map((item, index) => {
				return (
					<Link
						key={ index }
						href={ item.href }
						onClose={ onClose }
						vehicleType={ item.icon }
						isCatalog={ isCatalog }
					>
						{ t(item.label) }
					</Link>
				)
			}) }
		</section>
	)
}
