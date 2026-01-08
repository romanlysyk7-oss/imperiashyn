import { Layout } from '@/shared/ui/layout/Layout';
import { HomeFilters } from '@/widgets/home-filters';
import { HomeProducts } from '@/widgets/home-products';
import { AdditionalFilter } from '@/widgets/additional-home-filter';
import { TopBrands } from '@/widgets/top-brands';
import { Support } from '@/widgets/support';
import { Banner } from '@/entities/banner';
import { TextSeo } from '@/widgets/text-seo';
import { Locale } from '@/shared/types/locale';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;

	return (
		<>
			<HomeFilters />
			<Layout>
				<HomeProducts />
				<Banner />
				<AdditionalFilter />
				<Support />
				<TopBrands />
				<TextSeo locale={ locale } />
			</Layout>
		</>
	)
};
