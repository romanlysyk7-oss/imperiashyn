import { SelectOption } from '@/shared/types/common';

export type Auto = SelectOption<number>;

export interface Brand extends SelectOption<number> {
	sortOrder: string;
}

export interface City extends SelectOption<string> {
	labelRu: string;
}

export interface Season {
	value: number;
	name: string;
	nameUa: string;
	nameKey: string;
}

export interface NumericItem {
	value: string;
	number: number;
	p?: string;
}

export interface ValueItem {
	value: string;
	p: string;
}

export interface Year extends SelectOption<number> {}

export interface FiltersBaseData {
	auto: Auto[];
	brand: Brand[];
	diskBrand: Brand[];
	cities: City[];

	discDiameter: NumericItem[];
	discKrepeg: ValueItem[];
	discEt: ValueItem[];

	tyreDiameter: NumericItem[];
	tyreHeight: NumericItem[];
	tyreWidth: NumericItem[];
	tyreSeason: Season[];
	// tyreYear: Year[];
}
