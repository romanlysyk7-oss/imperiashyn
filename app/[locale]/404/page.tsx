import Image from 'next/image';

import { Locale } from '@/shared/types/locale';
import { Link } from '@/shared/i18n/navigation';

export default async function NotFound({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;

	return (
		<div className='min-h-96 py-10 px-6'>
			<div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
				<div className='mt-16 col-span-2 ml-auto'>
					<h2
						className='text-5xl mb-10 text-center lg:text-start'>404 {locale === Locale.UK ? 'Сторінку не знайдено' : 'Страница не найдена'}</h2>
					<p className='text-lg'>
						{
							locale === Locale.UK ?
								'Можливо ця сторінка була вилучена або допущена помилка в адресі Скористайтесь пошуком або поверніться ' :
								'Возможно эта страница была удалена или допущена ошибка в адресе Воспользуйтесь поиском или вернитесь '
						}
						<Link
							className='text-primary uppercase font-semibold hover:underline'
							href={`/`}>{locale === Locale.UK ? 'На головну сторінку' : 'На главную страницу'}
						</Link>
					</p>
				</div>
				<Image width={ 626 } height={ 428 } src='/images/error-pages/car-wheel.png' alt='' />
			</div>
		</div>
	)
};
