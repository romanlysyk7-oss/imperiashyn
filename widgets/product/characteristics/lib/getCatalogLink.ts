import { Section } from '@/shared/types/section';

export const getCatalogLink = (section: Section, to: string) => {
	switch (section) {
		case Section.Tires:
			return `/catalog/tires${to}`;
		case Section.Disks:
			return `/catalog/disks${to}`;
		case Section.Battery:
			return `/catalog/battery${to}`;
		default:
			return '/catalog';
	}
};
