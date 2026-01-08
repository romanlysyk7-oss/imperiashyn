import { ProductApi } from '@/entities/products/api/types';
import { Section } from '@/shared/types/section';

export type GroupedIds = Record<Section, number[]>;

export type GroupedItems = Record<Section, ProductApi[]>;

export type ProductsReducer =
	| 'reducerCart'
	| 'reducerBookmarks'
	| 'reducerComparison'
	| 'recentlyViewed';
