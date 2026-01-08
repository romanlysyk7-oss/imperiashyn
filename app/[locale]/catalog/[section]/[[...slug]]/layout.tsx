import { Metadata } from 'next';
import { ReactNode } from 'react';

import { Locale } from '@/shared/types/locale';
import { getCatalogSeo } from '@/entities/catalog/model/seo';
import { buildMetadata } from '@/shared/lib/seo/buildMetadata';
import { Section } from '@/shared/types/section';

export async function generateMetadata({ params, }: { params: { locale: Locale, section: Section, slug?: string[] } }): Promise<Metadata> {
	const { locale, section, slug } = await params;
	const seo = await getCatalogSeo(locale, section, slug);

	return buildMetadata({
		title: seo.title,
		description: seo.description,
		ogImagePath: `/${locale}/opengraph-image`,
		canonical: `${ locale === Locale.UK ? '' : `/${ locale }` }/catalog/${section}/${slug ? slug.join('/') : ''}`,
	});
}

export default async function LocaleLayout({ children }: { children: ReactNode }) {
	return (
		<>
			{ children }
		</>
	);
};
