import { Section } from '@/shared/types/section';

export function getProductSection(productId: string): Section {
	if(/\bdia\d+\b/.test(productId)) return Section.Disks;
	if(/(?:^|[^a-zA-Z])\d+ah(?=-|$)/.test(productId)) return Section.Battery;
	return Section.Tires;
}
