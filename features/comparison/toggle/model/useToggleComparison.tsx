'use client'
import { useTranslations } from 'next-intl';
import { addToast } from '@heroui/toast';

import { usePathname, useRouter } from '@/shared/i18n/navigation';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { addComparison, removeComparison } from '@/features/comparison/toggle/lib/storage';
import { setProgress } from '@/widgets/header/store/progressSlice';
import { updateStorage } from '@/shared/lib/locale-storage/helper';
import { Button } from '@/shared/ui/button';
import { Section } from '@/shared/types/section';

interface Params {
	id: number;
	section: Section;
}

export function useToggleComparison({ id, section }: Params) {
	const pathname = usePathname();
	const router = useRouter();
	const t = useTranslations('comparison');
	const dispatch = useAppDispatch();
	const { comparisonItems } = useAppSelector(state => state.comparisonReducer)
	const isComparison = comparisonItems.some(item => item.id === id);

	const handleClick = () => {
		if(pathname !== '/comparison') dispatch(setProgress(true));
		router.push('/comparison');
	}

	const toggle = () => {
		addToast({
			description: t(
				isComparison
					? 'product removed from comparison'
					: 'product added to comparison'
			),
			endContent: !isComparison && (
				<Button
					size='sm'
					onPress={ handleClick }
				>
					{ t('comparison') }
				</Button>
			)
		});

		dispatch(
			isComparison
				? removeComparison(id)
				: addComparison({ id, section })
		);

		updateStorage('reducerComparison', id, section, isComparison);
	};

	return {
		isComparison,
		toggle
	};
}
