import { ProductItem } from '@/entities/products/model/types';
import { GroupedIds } from './types';

export function groupProductsBySection(
	products: ProductItem[]
): GroupedIds {
	return products.reduce<GroupedIds>(
		(acc, { id, section }) => {
			if(!acc[section]) acc[section] = [];
			acc[section].push(id);
			return acc;
		},
		{ tires: [], cargo: [], disks: [], battery: [], car: [] }
	);
}
