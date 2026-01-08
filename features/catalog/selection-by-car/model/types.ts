import { Section } from '@/shared/types/section';

export interface SelectionByCarProps {
	car: string | null;
	section: Section;
}

export interface ParsedCarData {
	numbers: number[];
	modification: number;
	isValid: boolean;
}
