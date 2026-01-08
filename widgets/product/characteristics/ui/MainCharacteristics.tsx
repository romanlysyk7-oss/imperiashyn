'use client';

import { useTranslations } from 'next-intl';
import { Tooltip } from '@heroui/react';
import * as Icons from '@/shared/ui/icons';
import { Link } from '@/shared/ui/link';
import { Link as LinkI18n } from '@/shared/i18n/navigation';

import { Locale } from '@/shared/types/locale';
import { Section } from '@/shared/types/section';
import { Product } from '@/entities/product/model/types';

import { getCatalogLink } from '../lib/getCatalogLink';
import { getVehicleTypeLabel } from '@/entities/filters/lib/vehicleTypeLabel';

interface Props {
	locale: Locale;
	product: Product;
	section: Section;
}

export function MainCharacteristics({ locale, product, section }: Props) {
	const t = useTranslations('filters');
	const { offerGroup, brandId, brandName } = product;

	return (
		<div className="flex flex-col md:flex-row my-6 md:my-4 md:gap-10">
			<div className="flex-1">
				{ offerGroup.width && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							<Tooltip
								content={
									locale === Locale.UK
										? `Ширина ${ section === Section.Tires ? 'шини' : 'диска' }`
										: `Ширина ${ section === Section.Tires ? 'шины' : 'диска' }`
								}
							>
								<div className="flex gap-x-1">
									<Icons.InfoTooltipIcon size={ 18 } className="fill-[#7d92b2]"/>
									Ширина
								</div>
							</Tooltip>
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/w-${ offerGroup.width }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ offerGroup.width }
						</Link>
					</div>
				) }

				{ offerGroup.height && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							<Tooltip
								content={
									locale === Locale.UK
										? 'Висота шини у відсотках від ширини, якщо висота зазначена, вважається рівною 82'
										: 'Высота шины в процентах от ширины, если высота указана, считается равной 82'
								}
							>
								<div className="flex gap-x-1">
									<Icons.InfoTooltipIcon size={ 18 } className="fill-[#7d92b2]"/>
									{ t('height') }
								</div>
							</Tooltip>
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/h-${ offerGroup.height }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ offerGroup.height }
						</Link>
					</div>
				) }

				{ offerGroup.diameter && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							<Tooltip
								content={
									locale === Locale.UK
										? `${ section === 'tires' ? 'Внутрішній діаметр шини' : 'Діаметр диска' } в дюймах`
										: `${ section === 'tires' ? 'Внутренний диаметр шины' : 'Диаметр диска' } в дюймах`
								}
							>
								<div className="flex gap-x-1">
									<Icons.InfoTooltipIcon size={ 18 } className="fill-[#7d92b2]"/>
									{ t('diameter') }
								</div>
							</Tooltip>
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/d-${ offerGroup.diameter }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ offerGroup.diameter }
						</Link>
					</div>
				) }

				{ offerGroup.krep_pcd1 && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							<Tooltip
								content={
									locale === Locale.UK
										? 'Кількість кріпильних отворів'
										: 'Количество крепежных отверстий'
								}
							>
								<div className="flex gap-x-1">
									<Icons.InfoTooltipIcon size={ 18 } className="fill-[#7d92b2]"/>
									{ t('fasteners') }
								</div>
							</Tooltip>
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/kr-${ offerGroup.krep_pcd1 }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ offerGroup.krep_pcd1 }
						</Link>
					</div>
				) }

				{ offerGroup.speed_index && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							{ t('speed index') }
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/si-${ offerGroup.speed_index }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ locale === Locale.UK ? product.offerGroup.speed_index : product.offerGroup.speed_index_ru }
						</Link>
					</div>
				) }

				{ offerGroup.load_index && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							{ t('load index') }
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/li-${ offerGroup.load_index }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ locale === Locale.UK ? product.offerGroup.load_index : product.offerGroup.load_index_ru }
						</Link>
					</div>
				) }
			</div>

			<div className="flex-1">
				{ product.brandId && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							{ t('brand') }
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/b-${ brandId }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ brandName }
						</Link>
					</div>
				) }

				{ product.modelId && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							{ t('model') }
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/b-${ product.brandId }/m-${ product.modelId }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ product.modelName }
						</Link>
					</div>
				) }

				{ product.vehicleType && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							{ t('appointment') }
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/vt-${ product.vehicleType }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ getVehicleTypeLabel(product.vehicleType, t) }
						</Link>
					</div>
				) }

				{ product.season && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							Сезон
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/s-${ product.seasonNum }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ t(product.season) }
						</Link>
					</div>
				) }

				{ product.offerGroup.et && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							ET
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/et-${ product.offerGroup.et }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ product.offerGroup.et }
						</Link>
					</div>
				) }

				{ product.offerGroup.dia && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							DIA
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/dia-${ product.offerGroup.dia }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ product.offerGroup.dia }
						</Link>
					</div>
				) }

				{ section === Section.Tires && (
					<div className="flex md:my-4 text-sm font-medium">
						<div className="w-full flex items-center text-[#575C66] after:flex-1 after:border-b after:border-dashed after:h-px after:mx-2 after:mt-2">
							{ t('type size') }
						</div>

						<Link
							as={ LinkI18n }
							href={ getCatalogLink(section, `/w-${ product.width }/h-${ product.height }/d-${ product.diameter }`) }
							size='sm'
							color='primary'
							className="hover:underline max-w-max w-full"
						>
							{ `${ product.width }/${ product.height } R${ product.diameter }` }
						</Link>
					</div>
				) }
			</div>
		</div>
	);
}
