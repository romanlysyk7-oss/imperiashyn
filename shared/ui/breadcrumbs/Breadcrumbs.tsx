'use client';

import { useLocale,  useTranslations } from 'next-intl';
import { BreadcrumbItem, Breadcrumbs as BreadcrumbsUI } from '@heroui/react';
import * as Icons from '@/shared/ui/icons';

interface Props {
	path: {
		href: string
		title: string
		translations?: boolean
	}[]
}

export function Breadcrumbs({ path }: Props) {
	const locale = useLocale();
	const t = useTranslations('common');

	return (
		<BreadcrumbsUI
			separator='/'
			underline='always'
			className=' hover:text-primary' itemClasses={ { item: 'text-gray-600', separator: 'text-gray-600' } }
		>
			<BreadcrumbItem href={ `/${ locale }` }>
				<Icons.HomeIcon className='w-5 h-5 fill-gray-600'/>
			</BreadcrumbItem>
			{ path.filter(item => item.href !== '').map((item, index) => {
				return (
					<BreadcrumbItem
						key={ index + 1 }
						href={ `/${locale}${item.href}` }
						classNames={ { separator: 'text-gray-400', item: `text-gray-600 hover:text-primary ${ path.length === index + 1 ? 'font-bold text-black hover:text-black' : '' }` } }
					>
						{ item.translations ? t(item.title) : item.title }
					</BreadcrumbItem>
				)
			}) }
		</BreadcrumbsUI>
	)
}
