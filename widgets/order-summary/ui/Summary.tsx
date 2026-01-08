import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { twMerge } from 'tailwind-merge';
import { Divider, Spinner } from '@heroui/react';

import { Button } from '@/shared/ui/button';
import { CartItem } from '@/entities/cartItem';
import { ProductApi } from '@/entities/products/api/types';

interface Props {
	products: ProductApi[];
	isLoading: boolean;
	total: number;
	loading: boolean;
}

export function Summary({ products, isLoading, total, loading }: Props) {
	const t = useTranslations('summary');

	const { ref, inView } = useInView(
		{
			trackVisibility: true, delay: 100, threshold: 1, rootMargin: '-20px'
		}
	);

	return (
		<div className='w-full lg:w-96'>
			<div ref={ ref }></div>
			<div className={ twMerge('bg-white w-full lg:w-96 dark:bg-[#333333]', !inView && 'lg:fixed top-4') }>
				<div className='pt-5 pb-2 px-6'>
					<h3 className='font-bold'>{ t('your order') }</h3>
					{ isLoading && <Spinner /> }
					{ products.length ? (
						products.map((item, index) => (
							<div key={ item.best_offer.id }>
								<CartItem
									id={ item.best_offer.id }
									default_photo={ item.default_photo }
									full_name={ item.full_name }
									page_url={ item.page_url }
									sku={ item.sku }
									price={ item.min_price }
									maxQuantity={ item.offers[0].quantity }
								/>
								{ products.length - 1 !== index && (
									<Divider className="my-4"/>
								) }
							</div>
						))
					) : (
						<p>{ t('empty') }</p>
					) }
				</div>
				<div className='bg-blue-50 py-5 px-6'>
					<div className='flex justify-between font-bold mb-5 text-black'>
						<div>{ t('total sum') }</div>
						<div>{ total } грн</div>
					</div>
					<Button
						type='submit'
						className='w-full'
						isLoading={ loading }
						// disabled={ loadingBtn }
					>
						{ t('place an order') }
					</Button>
				</div>
			</div>
		</div>
	)
}