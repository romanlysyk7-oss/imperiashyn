'use client';

import { Tab, Tabs } from '@heroui/react';
import { useTranslations } from 'next-intl';

import { Locale } from '@/shared/types/locale';
import { Section } from '@/shared/types/section';
import { Product } from '@/entities/product/model/types';

import { MainCharacteristics } from './MainCharacteristics';
import { DescriptionTab } from './DescriptionTab';
import { Reviews } from '@/widgets/reviews/ui/Reviews';

interface Props {
	locale: Locale;
	product: Product;
	section: Section;
}

export function CharacteristicsBlock({ locale, product, section }: Props) {
	const t = useTranslations('filters');

	return (
		<section className="mt-8 md:mt-16">
			<Tabs
				aria-label="Product characteristics"
				size="lg"
				radius="sm"
				classNames={ {
					cursor: 'w-full bg-black',
					tab: 'md:text-sm md:font-bold md:h-12 md:px-5 md:uppercase',
					tabContent: 'group-data-[selected=true]:text-white',
					tabList: 'md:gap-6 w-full relative rounded-none p-0 border-b border-divider',
				} }
			>
				<Tab key="main" title={ t('main characteristics') }>
					<MainCharacteristics
						locale={ locale }
						product={ product }
						section={ section }
					/>
				</Tab>

				<Tab key="description" title={ t('description') }>
					<DescriptionTab locale={ locale } product={ product }/>
				</Tab>

				<Tab key="reviews" title={ t('reviews') }>
					<Reviews reviews={ product.review } model_id={ product.modelId } product_id={ product.id } trc_id={ product.trcId } />
				</Tab>
			</Tabs>
		</section>
	);
}
