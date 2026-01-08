'use client';

import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

import styles from './index.module.scss';
import { Button } from '@/shared/ui/button';
import { Link } from '@/shared/i18n/navigation';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';

const href='/catalog/tires/';

export function Banner() {
	const t = useTranslations('banner');
	const { handleNavigation } = useNavigationProgress();

	return <div className={ twMerge('mt-16 py-10 md:py-20 px-8 md:px-24', styles['banner']) }>
		<p className='text-lg md:text-xl text-white uppercase'>
			{ t('quality guarantee') }
		</p>
		<ul className='mt-10 md:mt-16 ml-8 list-disc uppercase'>
			<li className='text-2xl md:text-4xl font-bold text-white'>
				{ t('summer tires') }
			</li>
			<li className='mt-8 text-2xl md:text-4xl font-bold text-white'>
				{ t('winter tires') }
			</li>
			<li className='mt-8 text-2xl md:text-4xl font-bold text-white'>
				{ t('all-season tires') }
			</li>
		</ul>
		<Button
			as={ Link }
			href={ href }
			color='secondary'
			className='mt-16 w-full md:w-60'
			onPress={ () => handleNavigation(href) }
		>
			{ t('buy now') }
		</Button>
		{/*<Link to='/catalog/tires/' className='btn secondary mt-16 w-full md:w-60'>*/ }
		{/*	{lang === 'ua' ? 'Купити зараз' : 'Купить сейчас'}*/ }
		{/*</Link>*/ }
	</div>
}
