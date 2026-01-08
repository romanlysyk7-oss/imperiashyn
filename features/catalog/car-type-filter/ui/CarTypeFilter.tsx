'use client';

import { TypeCarFilter } from '@/widgets/navigation';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';

export function CarTypeFilter() {
	const { handleNavigation } = useNavigationProgress();
	const onClose = (href: string) => {
		handleNavigation(href);
	};

	return (
		<div className='hidden lg:flex gap-x-3 xl:gap-x-6'>
			<TypeCarFilter isCatalog onClose={ onClose } />
		</div>
	);
}
