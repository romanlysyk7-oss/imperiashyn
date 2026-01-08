import { getProduct } from '@/entities/product/model/services';
import { getSettings } from '@/entities/settings/api/settings.api';
import { Locale } from '@/shared/types/locale';

import { ProductPage } from '@/widgets/product';
import { detectProductSection, parseProductId } from '@/entities/product';
import { getFilterData } from '@/features/catalog/filter-alt/api/filter.api';
import { Section } from '@/shared/types/section';
import { Layout } from '@/shared/ui/layout/Layout';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { FilterAlt } from '@/features/catalog/filter-alt';
import { mapSettings } from '@/entities/settings/model/mapper';
import { SimilarProducts } from '@/widgets/product/similar-products/ui/SimilarProducts';

export default async function Page({ params }: { params: Promise<{ locale: Locale, product: string }> }) {
	const { locale, product } = await params;
	const section = detectProductSection(product);
	const productId = parseProductId(product);
	const productData = await getProduct(productId);
	const settings = await getSettings();
	const settingsData = mapSettings(settings);
	const filterData = await getFilterData(`?typeproduct=${ section === Section.Disks ? 3 : section === Section.Battery ? 4 : section === Section.Cargo ? 2 : 1 }`);

	const path = [
		{
			title: section,
			translations: true,
			href: `/catalog/${ section }`,
		},
		{
			title: productData?.name || '',
			translations: false,
			href: `/${ section }`,
		},
	];

	return (
		<Layout>
			<Breadcrumbs path={ path }/>
			<div className='product-page py-5 lg:flex'>
				<FilterAlt filterData={ filterData } section={ section } car={ null } isProductPage={ true }/>
				<ProductPage
					locale={ locale }
					productSlug={ productId }
					productData={ productData }
					settingsData={ settingsData }
					section={ section }
				/>
			</div>
			{ section !== Section.Battery && <SimilarProducts offerGroup={ productData.offerGroup } section={ section }/> }
		</Layout>
	);
}
