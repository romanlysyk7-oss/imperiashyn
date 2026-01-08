import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';
import { Section } from '@/shared/types/section';
import { Link } from '@/shared/i18n/navigation';

export function SwitchTabs({ section, car }: { section: Section, car: string | null }) {
	const t = useTranslations('common');

	const renderTab = (value: Section) => {
		const url = `/catalog/${ value }${ car ? `/${ car }` : '' }`;

		return (
			<Link
				href={ url }
				className={ twMerge(
					'text-sm font-bold uppercase py-3.5 rounded-t-sm border border-slate-200 border-b-0 text-center bg-white',
					section !== value && 'bg-zinc-200 text-gray-500'
				) }
			>
				{ t(value) }
			</Link>
		);
	};

	return (
		<div className='relative z-10 filter-tabs grid grid-cols-2 gap-2.5 -mb-0.5'>
			{ renderTab(Section.Tires) }
			{ renderTab(Section.Disks) }
		</div>
	)
}
