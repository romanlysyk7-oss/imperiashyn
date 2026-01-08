import { useCallback, useState } from 'react';
import { useLocale } from 'next-intl';

import { useRouter } from '@/shared/i18n/navigation';
import { buildFiltersUrl } from '../lib/buildFiltersUrl';
import { Section } from '@/shared/types/section';

export function useFilters(section: Section) {
	const router = useRouter();
	const locale = useLocale();

	const [ filter, setFilter ] = useState<Record<string, string | number>>({});
	const [ isLoading, setIsLoading ] = useState(false);

	const onChange = useCallback(
		(name: string, value: string | number | null) => {
			if(!value) return;
			setFilter(prev => ({ ...prev, [name]: value }));
		},
		[]
	);

	const onSubmit = useCallback(() => {
		setIsLoading(true);
		const url = buildFiltersUrl(filter, locale, section);
		router.push(url);
	}, [ filter, locale, router ]);

	return {
		filter,
		isLoading,
		onChange,
		onSubmit,
	};
}
