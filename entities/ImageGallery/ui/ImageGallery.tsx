import { Images } from '@/entities/product/model/types';
import { ProductImage } from '@/entities/product/ui/ProductImage';
import { mapProductImages } from '@/shared/ui/image-slider/lib/map-images';
import { ImageSlider } from '@/shared/ui/image-slider/ui/image-slider';

interface Props {
	photo: {
		url_part: string;
		url_part2: string;
	};
	images: Images[];
	name: string;
}

export function ImageGallery({ photo, images, name }: Props) {
	const productImages = mapProductImages(images, photo);

	if(images.length) return <ImageSlider images={ productImages } />;

	return (
		<ProductImage
			default_photo={ photo.url_part2 }
			images={ images }
			full_name={ name }
			width={ 288 }
			height={ 288 }
		/>
	)
}
