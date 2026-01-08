import { getAliasById } from '@/entities/alias/api/alias.api';
import { Locale, LocaleCode } from '@/shared/types/locale';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Title } from '@/shared/ui/title';
import { HtmlContent } from '@/shared/lib/sanitizeHtml';
import { Layout } from '@/shared/ui/layout/Layout';

export default async function Pages({ params }: { params: Promise<{ locale: Locale, id: string }> }) {
	const { locale, id } = await params;
	const lang = locale === Locale.UK ? LocaleCode.UA : Locale.RU;
	const alias = await getAliasById(id);

	const path = [
		{
			title: alias[id].description[lang].meta_title,
			href: alias?.[id].alias || '/',
		}
	];

	return (
		<Layout size='lg'>
			<Breadcrumbs path={ path } />
			<Title title={ alias[id].description[lang].meta_h1 || '' } />
			<HtmlContent htmlString={ alias[id].description?.[lang].content || '' } />
		</Layout>
	)
};
