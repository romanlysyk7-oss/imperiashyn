'use client';

import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { Link } from '@/shared/i18n/navigation';
import { Button } from '@/shared/ui/button';
import { XMarkIcon } from '@/shared/ui/icons';

import { removeSlugValue } from '../model/normalizeSlug';
import { useActiveFilters } from '../model/useActiveFilters';
import { ActiveFiltersProps } from '../model/types';

const ignoreKeys = ['car', 'p'];

export function ActiveFilters({ slug, section, className }: ActiveFiltersProps) {
	const t = useTranslations('filters');
	const { resolveLabel } = useActiveFilters(section);

	if(!slug?.length) return null;

	return (
		<div className={ twMerge('mb-3 flex-wrap justify-end gap-2 p-4 lg:p-0', className) }>
			{ slug.map(item => {
				const [ key, raw ] = item.split('-');
				if(ignoreKeys.includes(key)) return null;
				return decodeURIComponent(raw)
					.split(',')
					.map(value => (
						<Button
							key={ `${ key }-${ value }` }
							as={ Link }
							href={ `/catalog/${ section }/${ removeSlugValue(
								slug,
								key,
								value,
							).join('/') }` }
							className="bg-gray-500 pl-2 pr-0.5 min-w-10 h-7"
							size='sm'
							radius='full'
							endContent={ <XMarkIcon className='fill-[#b9b9ba]' /> }
						>
							{ resolveLabel(key, value) }
						</Button>
					));
			}) }

			<Button
				as={ Link }
				href={ `/catalog/${ section }` }
				variant='light'
				color='default'
				size='sm'
				radius='full'
				endContent={ <XMarkIcon className='fill-[#b9b9ba]' /> }
			>
				{ t('reset everything') }
			</Button>
		</div>
	);
}
