import { Metadata } from 'next';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { buildMetadata } from '@/shared/lib/seo/buildMetadata';
import { getHomeSeo } from '@/entities/home/model/seo';

import { Header } from '@/widgets/header';
import { getAliasAll } from "@/entities/alias/api/alias.api";
import { getSettings } from '@/entities/settings/api/settings.api';
import { mapSettings } from '@/entities/settings/model/mapper';
import { ProgressBar } from '@/widgets/progress';
import { Footer } from '@/widgets/footer';
import { Locale } from '@/shared/types/locale';

export async function generateMetadata({ params, }: { params: { locale: Locale } }): Promise<Metadata> {
	const { locale } = await params;
	const seo = await getHomeSeo(locale);

	return buildMetadata({
		title: seo.title,
		description: seo.description,
		ogImagePath: `/${locale}/opengraph-image`,
		canonical: `${ locale === Locale.UK ? '/' : `/${ locale }` }`,
	});
}

export default async function LocaleLayout({ children }: { children: ReactNode }) {
	const messages = await getMessages();
	const settings = await getSettings();
	const alias = await getAliasAll();
	const settingsData = mapSettings(settings);
	const year = new Date().getFullYear();

	return (
		<NextIntlClientProvider messages={ messages }>
			<ProgressBar />
			<Header alias={ alias.header } settingsData={ settingsData } />
			<main>
				{ children }
			</main>
			<Footer
				alias={ alias.header }
				settingsData={ settingsData }
				year={ year }
			/>
		</NextIntlClientProvider>
	);
};
