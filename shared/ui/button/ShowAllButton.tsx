'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/shared/i18n/navigation';
import { Button } from '@/shared/ui/button/Button';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';

const href = '/catalog/tires';

export function ShowAllButton() {
	const t = useTranslations('common');
	const { handleNavigation } = useNavigationProgress();

	return (
		<div className='flex justify-center mt-10'>
			<Button
				as={ Link }
				href={ href }
				variant='bordered'
				radius='none'
				color='default'
				onPress={ () => handleNavigation(href) }
			>
				{ t('show all') }
			</Button>
		</div>
	)
}
