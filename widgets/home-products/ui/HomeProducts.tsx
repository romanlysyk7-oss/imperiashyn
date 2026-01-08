import { ProductList } from '@/entities/product';
import { NoResult } from '@/shared/ui/no-result';
import { Title } from '@/shared/ui/title';
import { ShowAllButton } from '@/shared/ui/button/ShowAllButton';
import { fetchHomeProducts } from '../model/services';

export async function HomeProducts() {
	const res = await fetchHomeProducts();

	if(!res.result) {
		return <NoResult description="no result"/>;
	}

	return (
		<>
			<Title isMain translations title="top 10 popular tires"/>
			<ProductList
				products={ res.data.products }
				classnames="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5"
			/>
			<ShowAllButton />
		</>
	);
}
