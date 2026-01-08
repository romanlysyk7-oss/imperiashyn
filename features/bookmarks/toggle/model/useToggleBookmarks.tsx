'use client'
import { useTranslations } from 'next-intl';
import { addToast } from '@heroui/toast';

import { usePathname, useRouter } from '@/shared/i18n/navigation';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { addBookmarks, removeBookmarks } from '@/features/bookmarks/toggle/lib/storage';
import { setProgress } from '@/widgets/header/store/progressSlice';
import { updateStorage } from '@/shared/lib/locale-storage/helper';
import { Button } from '@/shared/ui/button';
import { Section } from '@/shared/types/section';

interface Params {
	id: number;
	section: Section;
}

export function useToggleBookmarks({ id, section }: Params) {
	const pathname = usePathname();
	const router = useRouter();
	const t = useTranslations('bookmarks');
	const dispatch = useAppDispatch();
	const { bookmarksItems } = useAppSelector(state => state.bookmarksReducer)
	const isBookmarked = bookmarksItems.some(item => item.id === id);

	const handleClick = () => {
		if(pathname !== '/bookmarks') dispatch(setProgress(true));
		router.push('/bookmarks');
	}

	const toggle = () => {
		addToast({
			description: t(
				isBookmarked
					? 'product removed from wishlist'
					: 'product added to wishlist'
			),
			endContent: !isBookmarked && (
				<Button
					size='sm'
					onPress={ handleClick }
				>
					{ t('wishlist') }
				</Button>
			)
		});

		dispatch(
			isBookmarked
				? removeBookmarks(id)
				: addBookmarks({ id, section })
		);

		updateStorage('reducerBookmarks', id, section, isBookmarked);
	};

	return {
		isBookmarked,
		toggle
	};
}
