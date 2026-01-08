export interface ItemApi {
	numeric: number;
	value: string;
	p?: string;
}

export interface SeasonApi {
	name: string;
	name_key: string;
	name_ua: string;
	value: number;
}

export interface CityApi {
	label: string;
	label_ru: string;
	value: string;
}

export interface BaseDataApi {
	auto: { label: string; value: number }[];
	brand: { label: string; sort_order: string; value: number }[];
	brand_disc: { label: string; sort_order: string; value: number }[];
	disc_width: { value: string; p: string }[];
	citys: CityApi[];
	colir_abbr: { value: string; p: string }[];
	country: { label: string; value: string }[];
	country_ru: { label: string; value: string }[];
	disc_diameter: ItemApi[];
	krip: { value: string; p: string }[];
	load: ItemApi[];
	omolog: { value: string; p: string }[];
	speed: { value: string; p: string }[];
	et: { value: string; p: string }[];
	tyre_diameter: ItemApi[];
	tyre_height: ItemApi[];
	tyre_width: ItemApi[];
	tyre_season: Record<string, SeasonApi>
	tyre_year: { label: number; value: number }[];
}

export interface ManufModels {
	value: number
	label: string
	types: number
	manufacturer_id: number
	alias: string
}
