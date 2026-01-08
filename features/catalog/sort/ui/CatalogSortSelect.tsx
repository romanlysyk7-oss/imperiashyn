'use client';

import { useTranslations } from 'next-intl';
import { Select, SelectItem, type SharedSelection } from '@heroui/react';

import { useRouter } from '@/shared/i18n/navigation';
import { SORT_OPTIONS } from '../model/sortOptions';
import { Section } from '@/shared/types/section';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';

interface Props {
	section: Section;
	slug?: string[];
}

export function CatalogSortSelect({ section, slug }: Props) {
	const t = useTranslations('catalog');
	const router = useRouter();
	const { handleNavigation } = useNavigationProgress();

	const currentOrder = slug?.find(item => item.startsWith('order-'));
	const cleanSlug = slug?.filter(item => !item.startsWith('order-')) ?? [];

	const handleChange = (keys: SharedSelection) => {
		const order = Array.from(keys)[0];
		if(!order) return;

		const path = `/catalog/${ section }/${ [ ...cleanSlug, order ].join('/') }`;
		handleNavigation(path);
		router.push(path);
	};

	return (
		<Select
			variant="bordered"
			radius="sm"
			size="sm"
			label={ t('sorting') }
			selectedKeys={ currentOrder ? [ currentOrder ] : [] }
			onSelectionChange={ handleChange }
			classNames={{ base: 'max-w-60 lg:max-w-64', label: 'font-bold uppercase' }}
		>
			{ SORT_OPTIONS.map(option => (
				<SelectItem
					key={ option.href }
					textValue={ t(option.label) } // ✅ тепер безпечно
				>
					<span className="text-small">
						{ t(option.label) }
					</span>
				</SelectItem>
			)) }
		</Select>
	);
}
