import { Layout } from '@/shared/ui/layout/Layout';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Title } from '@/shared/ui/title';
import { Search } from '@/widgets/search';

export default async function Page() {
	const path = [
		{
			title: 'search',
			translations: true,
			href: '/search'
		}
	];

	return (
		<Layout size='lg'>
			<Breadcrumbs path={ path } />
			<Title translations title='search' />
			<Search />
		</Layout>
	)
}
