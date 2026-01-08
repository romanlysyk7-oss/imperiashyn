import { Section } from '@/shared/types/section';

export function detectProductSection(slug: string): Section {
	if(/\bdia\d+\b/.test(slug)) {
		return Section.Disks;
	}

	if(/(?:^|[^a-zA-Z])\d+ah(?=-|$)/.test(slug)) {
		return Section.Battery;
	}

	return Section.Tires;
}
