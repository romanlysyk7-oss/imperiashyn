import { FilterParams } from './types';

export type UrlKeyMap = Record<string, keyof FilterParams>;

export const URL_TO_FILTER_MAP: UrlKeyMap = {
	w: 'width',
	h: 'height',
	d: 'radius',
	b: 'brand',
	s: 'sezon',
	stud: 'only_studded',
	m: 'model_id',
	cit: 'citys',
	ctr: 'country',
	y: 'year',
	hm: 'omolog',
	kr: 'krepeg',
	td: 'typedisk',
	clr: 'colir',
	ct: 'jemnist',
	sk: 'puskovii_strum',
	elt: 'tip_elektrolitu',
	tk: 'tip_korpusu',
	am: 'napruga',
	pl: 'poliarnist',
	vt: 'vehicle_type',
	li: 'li',
	si: 'si',
	oc: 'only_c',
	xl: 'only_xl',
	owl: 'only_owl',
	rf: 'only_run_flat',
	ofr: 'only_off_road',
	pfrom: 'minPrice',
	pto: 'maxPrice',
	etfrom: 'etMin',
	etto: 'etMax',
	diafrom: 'diaMin',
	diato: 'diaMax',
	wfrom: 'minShirina',
	wto: 'maxShirina',
	hfrom: 'minVisota',
	hto: 'maxVisota',
	lngfrom: 'minDovzina',
	lngto: 'maxDovzina',
};

export const FILTER_TO_URL_MAP: Record<keyof FilterParams, string> =
	Object.fromEntries(
		Object.entries(URL_TO_FILTER_MAP).map(([ urlKey, filterKey ]) => [
			filterKey,
			urlKey,
		])
	) as Record<keyof FilterParams, string>;
