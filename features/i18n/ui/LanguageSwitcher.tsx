'use client'

import { useLocale, useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';
import { addToast } from '@heroui/toast';

import { Link, usePathname } from '@/shared/i18n/navigation';
import { Locale } from '@/shared/types/locale';

const params = [
	{ title: 'UA', language: Locale.UK },
	{ title: 'RU', language: Locale.RU },
];

export function LanguageSwitcher() {
	const locale = useLocale();
	const pathname = usePathname();
	const t = useTranslations('languageSwitcher');

	return (
		<div className='divide-x text-gray-500 divide-gray-500 flex items-center'>
			{ params.map((item, index) => {
				return <Link
					locale={ item.language }
					key={ index }
					href={ pathname }
					onClick={ () => addToast({
						title: t('language changed'),
					}) }
					className={
						twMerge(
							'font-bold text-sm 2xl:text-base pr-1.5 2xl:pr-3 active:text-white',
							locale === item.language && 'text-white pointer-events-none',
							index === 0 && 'pr-1.5 2xl:pr-3',
							index === 1 && 'pl-1.5 2xl:px-3'
						)
					}>
					{ item.title }
				</Link>
			}) }
		</div>
	)
}
