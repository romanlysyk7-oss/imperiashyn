import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';
import { Link } from '@/shared/ui/link';
import { Section } from '@/shared/types/section';

const tabs = [
	{ title: 'by parameters', href: '' },
	{ title: 'by car', href: '/car-' }
];

export function SwitchTabsByParams({ section, car }: { section: Section, car: string | null }) {
	const t = useTranslations('catalog');

	return (
		<div className='flex lg:justify-between gap-x-5'>
			{ tabs.map((item, index) => (
				<Link
					key={ index }
					href={ `/catalog/${section}${item.href}` }
					className={ twMerge('font-bold', (index === 0 && car) && 'text-gray-500', (index === 1 && !car) && 'text-gray-500' ) }
				>
					{ t(item.title) }
				</Link>
			)) }
		</div>
	)
}
