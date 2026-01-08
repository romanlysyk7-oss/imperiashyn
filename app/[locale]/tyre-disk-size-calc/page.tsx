import { Layout } from '@/shared/ui/layout/Layout';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { Title } from '@/shared/ui/title';
import { TyreDiskSizeCalc } from '@/widgets/tyre-disk-size-calc';

export default async function Page() {
	const path = [
		{
			title: 'tire calculator',
			translations: true,
			href: '/tyre-disk-size-calc'
		}
	];

	return (
		<Layout size='lg'>
			<Breadcrumbs path={ path } />
			<Title translations title='tire calculator' />
			<TyreDiskSizeCalc />
		</Layout>
	)
};
