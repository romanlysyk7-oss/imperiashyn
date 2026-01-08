import { Images } from '@/entities/product/model/types';
import { SliderImage } from '../model/types';

export function mapProductImages(
	images: Images[],
	photo?: { url_part: string; url_part2: string }
): SliderImage[] {
	const base = photo
		? [ { original: photo.url_part, thumbnail: photo.url_part2 } ]
		: [];

	const rest = images.map((img) => ({
		original: img.big,
		thumbnail: img.small,
	}));

	return [ ...base, ...rest ];
}
