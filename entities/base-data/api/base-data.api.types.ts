export interface SelectOption<T = number | string> {
	label: string;
	value: T;
}

export type Auto = SelectOption<number>;

export interface Brand extends SelectOption<number> {
	sortOrder: string;
}

export interface NumericItem {
	value: string;
	number: number;
	postfix?: string;
}

export interface PostfixItem {
	value: string;
	postfix: string;
}

export interface Country extends SelectOption<string> {}

export interface City extends SelectOption<string> {
	labelRu: string;
}

export interface Season {
	value: number;
	name: string;
	nameUa: string;
	nameKey: string;
}

export interface Year extends SelectOption<number> {}

export interface BaseDataApi {
	auto: Auto[];
	brand: Brand[];
	brandDisc: Brand[];
	cities: City[];

	colorAbbr: PostfixItem[];
	country: Country[];
	countryRu: Country[];

	dia: NumericItem[];
	discDiameter: NumericItem[];
	discWidth: NumericItem[];
	et: NumericItem[];
	krep: NumericItem[];

	load: NumericItem[];
	speed: PostfixItem[];
	homologation: PostfixItem[];

	tyreDiameter: NumericItem[];
	tyreHeight: NumericItem[];
	tyreWidth: NumericItem[];
	tyreSeason: Season[];
	tyreYear: Year[];
}
