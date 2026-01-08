export type Locale = 'ua' | 'ru';
export type Localized<T> = Record<Locale, T>;

interface DescriptionsItem {
	title: string;
}

export interface AliasItem {
	article_id: number;
	status: 0 | 1;
	slug: string;
	created_at: string;
	updated_at: string;
	sort_header: number;
	sort_footer: number;
	header: 0 | 1;
	footer: 0 | 1;
	descriptions: Localized<DescriptionsItem>;
}

export interface AliasAll {
	header: AliasItem[];
	footer: AliasItem[];
}

interface DescriptionContent {
	title: string;
	content: string;
	meta_h1: string;
	meta_title: string;
	meta_description: string;
}

type Description = Localized<DescriptionContent>;

interface Page {
	alias: string;
	description: Description;
}

export type Pages = Record<string, Page>;
