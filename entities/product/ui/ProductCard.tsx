'use client'

import { JSX } from 'react';
import { Card, CardBody, CardFooter } from '@heroui/react';
import { ProductIcons } from './ProductIcons';
import { ActionsBlock } from '@/entities/product/ui/ActionsBlock';
import { Section } from '@/shared/types/section';
import { ProductImage } from '@/entities/product/ui/ProductImage';
import { Article } from '@/shared/ui/article';
import { CountryInfo } from '@/entities/country';
import { Rating } from '@/entities/rating';
import { ProductPrice } from '@/entities/product/ui/Price';
import { AddToCart } from '@/features/add-to-cart';
import { ProductName } from '@/entities/product/ui/ProductName';
import { ProductApi } from '@/entities/products/api/types';

const cargo = [ '3', '4', '5', '6', '9', '10', '11' ];

interface Props {
	item: ProductApi
}

export function ProductCard({ item }: Props): JSX.Element {
	const { default_photo, full_name, sku, min_price, season, vehicle_type, page_url, best_offer, model, studded } = item;
	const section = item.vehicle_type ? Section.Tires : item.diameter ? Section.Disks : Section.Battery;
	const sectionNew = section === Section.Tires ? cargo.includes(item.vehicle_type) ? Section.Cargo : Section.Tires : section;

	return (
		<Card
			radius='sm'
			className='relative group shadow-sm duration-150 ease-in-out hover:shadow-xl/20 hover:z-10 hover:scale-105'
		>
			<CardBody>
				<div className='relative min-h-32 sm:min-h-52 text-center'>
					<ProductIcons isProductCard season={ season } vehicleType={ vehicle_type } studded={ studded } />
					<ActionsBlock sectionNew={ sectionNew } group={ best_offer?.id || 0 }/>
					<ProductImage default_photo={ default_photo } images={ model.model_images } full_name={ full_name }/>
				</div>
				<div className='px-2 flex flex-col'>
					<ProductName full_name={ full_name } page_url={ page_url } />
					<Article sku={ sku }/>
					{ section !== Section.Battery && <CountryInfo
						countryUk={ best_offer?.country }
						countryRu={ best_offer?.country_ru }
						year={ best_offer?.year || 0 }
						classNames='my-1.5 md:my-3.5'
					/> }
					<Rating commentsCount={ undefined } commentsAvgRate={ 0 }/>
				</div>
			</CardBody>
			<CardFooter className='justify-between'>
				<ProductPrice min_price={ min_price } sectionIsBattery={ section === Section.Battery }/>
				<AddToCart id={ best_offer?.id || 0 } quantity={ 1 } section={ sectionNew }/>
			</CardFooter>
		</Card>
	)
}
