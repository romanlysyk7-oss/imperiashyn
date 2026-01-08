import Image from 'next/image';
import { useLocale } from 'next-intl';
import { twMerge } from 'tailwind-merge';
import { Locale } from '@/shared/types/locale';
import type { ModelImage } from '@/entities/products/model';

interface Props {
	default_photo: string;
	images?: ModelImage[];
	full_name: string;
	width?: number;
	height?: number;
}

export function ProductImage({ default_photo, images, full_name, width = 220, height = 220 }: Props) {
	const locale = useLocale();

	return (
		<div className='relative'>
			<Image
				className={ twMerge('mx-auto', images && images.length > 0 && 'group-hover:opacity-0 duration-400') }
				src={ default_photo || (locale === Locale.UK ? '/images/no-photo.jpg' : '/images/no-photo-ru.jpg') }
				alt={ full_name }
				width={ width }
				height={ height }
				loading='lazy'
			/>
			{ images && images.length > 0 && <Image
				className='mx-auto absolute top-0 opacity-0 group-hover:opacity-100 duration-400 left-1/2 -translate-x-1/2'
				src={ images[0].small }
				alt={ full_name }
				width={ width }
				height={ height }
				loading='lazy'
			/> }
		</div>
	)
}
