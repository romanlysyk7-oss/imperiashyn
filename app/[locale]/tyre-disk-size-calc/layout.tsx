import { Metadata } from 'next';
import { ReactNode } from 'react';

import { Locale } from '@/shared/types/locale';
import { buildMetadata } from '@/shared/lib/seo/buildMetadata';
import { getSeo } from '@/entities/tyre-disk-size-calc/model/seo';

export async function generateMetadata({ params, }: { params: { locale: Locale } }): Promise<Metadata> {
	const { locale } = await params;
	const seo = await getSeo(locale);

	return buildMetadata({
		title: seo.title,
		description: seo.description,
		ogImagePath: `/${locale}/opengraph-image`,
		canonical: `${ locale === Locale.UK ? '' : `/${ locale }` }/tyre-disk-size-calc`,
	});
}

export default async function LocaleLayout({ children }: { children: ReactNode }) {
	return (
		<>
			{ children }
		</>
	);
};
