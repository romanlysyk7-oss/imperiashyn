export type Locale = 'ua' | 'ru';

export interface Phone {
	operator: 'vodafone' | 'kievstar' | 'life';
	phone: string;
	url?: string;
	name?: string;
}

export interface LangConfig {
	name: string;
	email?: string;
	description: string;
	owner: string;
	address: string;
	open: string;
	meta: {
		title: string;
		description: string;
	};
	phones: Phone[];
	blocks: {
		h2Top?: string;
		h2PopularTyre?: string;
		h2PopularAuto?: string;
	};
	kredit?: string;
}

export interface HeadConfig {
	headHtml: string;
	bodyHtml: string;
	gtm?: string;
}

export interface ConfigSettings {
	head: HeadConfig;
	locales: Record<Locale, LangConfig>;
}
