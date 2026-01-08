import { useTranslations } from 'next-intl';

export function ProductPrice({ min_price, sectionIsBattery }: { min_price: number, sectionIsBattery: boolean }) {
	const t = useTranslations('common');

	return (
		<div>
			<div className='flex items-end mb-0.5'>
				<div className='hidden md:block text-sm font-medium mb-0.5 mr-1 lowercase'>{ t('from') }</div>
				<div className='text-2xl font-bold'>{ min_price } ₴</div>
			</div>
			{ !sectionIsBattery && <div className='hidden md:flex text-sm text-gray-500'>
				<div className='lowercase'>{ t('from') }</div>
				<div className='font-bold mx-1'>{ min_price * 4 } ₴</div>
				<div>за 4 шт.</div>
			</div> }
		</div>
	)
}
