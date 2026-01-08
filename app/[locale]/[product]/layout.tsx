import { Metadata } from 'next';
import { ReactNode } from 'react';

import { Locale } from '@/shared/types/locale';
import { buildMetadata } from '@/shared/lib/seo/buildMetadata';
import { getSeo } from '@/entities/product/model/seo';

export async function generateMetadata({ params, }: { params: { locale: Locale, product: string } }): Promise<Metadata> {
	const { locale, product } = await params;
	const seo = await getSeo(product);

	return buildMetadata({
		title: seo.title,
		description: seo.description,
		ogImagePath: `/${locale}/opengraph-image`,
		canonical: `${ locale === Locale.UK ? '' : `/${ locale }` }/${product}`,
	});
}

export default async function LocaleLayout({ children }: { children: ReactNode }) {
	return (
		<>
			{ children }
		</>
	);
};
