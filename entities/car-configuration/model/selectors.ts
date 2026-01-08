import { KitTyreSize, KitDiskSize } from '@/features/catalog-filter-by-car/model/types';

export const selectFactorySizes = (data?: KitTyreSize[]) =>
	data?.filter(item => item.type === 1) ?? [];

export const selectAlternativeSizes = (data?: KitTyreSize[]) =>
	data?.filter(item => item.type === 2) ?? [];

export const selectDiskFactorySizes = (data?: KitDiskSize[]) =>
	data?.filter(item => item.type === 1) ?? [];

export const selectDiskAlternativeSizes = (data?: KitDiskSize[]) =>
	data?.filter(item => item.type === 2) ?? [];
