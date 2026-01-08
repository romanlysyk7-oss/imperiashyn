import { Metadata } from 'next';
import { ReactNode } from 'react';

import { Locale } from '@/shared/types/locale';
import { buildMetadata } from '@/shared/lib/seo/buildMetadata';
import { getSeo } from '@/entities/static-page/model/seo';

export async function generateMetadata({ params, }: { params: { locale: Locale, id: string } }): Promise<Metadata> {
	const { locale, id } = await params;
	const seo = await getSeo(locale, id);

	return buildMetadata({
		title: seo.title,
		description: seo.description,
		ogImagePath: `/${locale}/opengraph-image`,
		canonical: `${ locale === Locale.UK ? '' : `/${ locale }` }/page/${id}`,
	});
}

export default async function LocaleLayout({ children }: { children: ReactNode }) {
	return (
		<>
			{ children }
		</>
	);
};
