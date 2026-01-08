import { useCallback } from 'react';
import { usePathname } from "@/shared/i18n/navigation";
import { useAppDispatch } from '@/shared/hooks/redux';
import { showProgress } from '@/features/progress/model/progress.slice';

export const useNavigationProgress = () => {
	const pathname = usePathname();
	const dispatch = useAppDispatch();

	const handleNavigation = useCallback(
		(href: string) => {
			if (pathname !== href) {
				dispatch(showProgress());
			}
		},
		[pathname, dispatch]
	);

	return { handleNavigation };
};
