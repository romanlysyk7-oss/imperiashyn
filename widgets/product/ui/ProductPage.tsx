'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Locale } from '@/shared/types/locale';
import { Section } from '@/shared/types/section';
import { ProductIcons } from '@/entities/product/ui/ProductIcons';
import { ImageGallery } from '@/entities/ImageGallery/ui/ImageGallery';
import { Article } from '@/shared/ui/article';
import { Rating } from '@/entities/rating';
import { ActionsBlock } from '@/widgets/product/ui/ActionsBlock';
import { Offers } from '@/widgets/product/ui/Offers';
import { Quantity } from '@/widgets/product/ui/Quantity';
import type { ConfigSettings } from '@/shared/types/settings';
import { InfoBlock } from '@/widgets/info-block';
import { Product } from '@/entities/product/model/types';
import { DeliveryCalculation } from '@/widgets/delivery-calculation';
import { BuyActions } from '@/widgets/product/ui/BuyActions';
import './index.scss';
import { CharacteristicsBlock } from '@/widgets/product/characteristics';
import { OtherModelSizes } from '@/widgets/product/other-model-sizes/ui/OtherModelSizes';

interface Props {
	locale: Locale;
	productSlug: string;
	productData: Product;
	settingsData: ConfigSettings;
	section: Section;
}

export function ProductPage({ locale, productSlug, productData, settingsData, section }: Props) {
	const [ quantity, setQuantity ] = useState(1);
	const [ offerId, setOfferId ] = useState(0);
	const t = useTranslations('product');
	const {
		id,
		availableQuantity,
		brandImage,
		brandName,
		imageBig,
		imageSmall,
		images,
		name,
		price,
		review,
		sku,
		season,
		studded,
		vehicleType,
		offers
	} = productData;

	useEffect(() => {
		if(productData) setOfferId(offers[0].offer_id);
	}, [ productData ]);

	const onChange = (e: { target: HTMLInputElement }) => {
		const value = e.target.value;
		const onlyNumbers = value.replace(/\D/g, '');
		const numericValue = Number(onlyNumbers);

		setQuantity(numericValue < Number(quantity) ? numericValue : Number(quantity));
	}

	const onSetQuantity = (_: number, quan: number) => {
		setQuantity(quan);
	}

	return (
		<section className="flex flex-col 2xl:flex-row justify-between gap-1 lg:gap-x-6 mt-4 md:mt-0">
			<div className="max-w-[900] flex-1">
				<div className="flex flex-col md:flex-row items-center md:items-start md:border-b border-[#DEE2EB]">
					<div className='gallery relative mb-7 pb-5 w-64'>
						<div className="flex justify-between">
							<ProductIcons season={ season } vehicleType={ vehicleType } studded={ studded }/>
							{ brandImage && (
								<Image
									src={ brandImage }
									alt={ brandName }
									width={ 112 }
									height={ 134 }
								/>
							) }
						</div>

						<ImageGallery
							photo={ {
								url_part: imageSmall,
								url_part2: imageBig,
							} }
							images={ images }
							name={ name }
						/>
					</div>
					<ActionsBlock className='flex md:hidden' id={ id } section={ section } quantity={ quantity } />
					<div className="flex-1 md:ml-6 xl:ml-10">
						<h1 className="text-2xl font-bold mt-8 md:mt-0">
							{ name }
						</h1>

						<div className="flex justify-between flex-col xl:flex-row xl:items-center mt-5">
							<div className='mb-4 xl:mb-0'>
								<Article sku={ sku }/>
								<Rating
									commentsCount={ review?.length || undefined }
									commentsAvgRate={ 0 }
								/>
							</div>
							<ActionsBlock className='hidden md:flex' id={ id } section={ section } quantity={ quantity } />
						</div>

						<div className="mt-8">
							<div className="flex items-end">
								<span className="mr-2.5 text-xl lowercase">{ t('price') }</span>
								<span className="text-4xl font-bold mr-2.5">
										{ price }
									</span>
								<span className="text-xl">грн/шт.</span>
							</div>
							{section === Section.Tires && <div className='mt-3 text-gray-500'>
								{ t('price for one tire') }
							</div>}
							{section === Section.Disks && <div className='mt-3 text-gray-500'>
								{ t('price for one disk') }
							</div>}
						</div>
						{ offerId !== 0 && <Offers locale={ locale } offerId={ offerId } offers={ offers } setOfferId={ setOfferId } setQuantity={ setQuantity } /> }
					</div>
				</div>
				<div className='purchase-information grid justify-self-stretch mt-5 md:mt-10 gap-3'>
					<Quantity id={ 0 } quantity={ quantity } offerQuantity={ availableQuantity } price={ price } onChange={ onChange } setQuantity={ onSetQuantity }/>
					<DeliveryCalculation offer_id={ offerId } quantity={ quantity } setQuantity={ setQuantity } price={ price } />
					<BuyActions id={ offerId } quantity={ quantity } section={ section } offerItem={ offers.find(offer => offer.offer_id === offerId) } />
				</div>
				<CharacteristicsBlock locale={ locale } product={ productData } section={ section } />
				{ section !== Section.Battery &&
					<OtherModelSizes brand={ productData.brandId } model={ productData.modelId } diameter={ productData.offerGroup.diameter } section={ section } vehicle_type={ productData.vehicleType } />
				}
			</div>
			<InfoBlock settingsData={ settingsData } />
		</section>
	);
}
