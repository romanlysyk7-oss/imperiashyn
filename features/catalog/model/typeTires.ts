import { Section } from '@/shared/types/section';

export const TypeTires = (section: Section) => {
	if(section === Section.Cargo) {
		return '&vehicle_type=3';
	} else if(section === Section.Special) {
		return '&vehicle_type=9';
	} else if(section === Section.Moto) {
		return '&vehicle_type=7';
	} else {
		return null;
	}
};
