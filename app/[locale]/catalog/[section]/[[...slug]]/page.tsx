import { Locale } from '@/shared/types/locale';
import { Section } from '@/shared/types/section';
import { Layout } from '@/shared/ui/layout/Layout';
import { FilterAlt } from '@/features/catalog/filter-alt';
import { getFilterData } from '@/features/catalog/filter-alt/api/filter.api';
import { CatalogHeader, CatalogToolbar } from '@/widgets/catalog';
import { ActiveFilters, CatalogProducts, SelectionByCar } from '@/features/catalog';
import { transformUrl } from '@/features/catalog/model/transformUrl';
import { Support } from '@/widgets/support';

const pageItem = 12;
const sort = {
	ch: '&order[asc]=1',
	ex: '&order[asc]=0',
	pop: '&order[value]=popular&order[asc]=0',
	off: '&order[value]=offers'
}

export default async function Page({ params }: { params: Promise<{ locale: Locale, section: Section, slug?: string[] }> }) {
	const { locale, section, slug } = await params;
	const filterData = await getFilterData(`?typeproduct=${section === Section.Disks ? 3 : section === Section.Battery ? 4 : section === Section.Cargo ? 2 : 1}`);
	const paramsUrl = transformUrl({ section, slug: slug || [] });
	const found = slug?.find(item => item.startsWith('order-'))?.split('-')[1] as keyof typeof sort;
	const searchParams = `?${paramsUrl || ''}${found && sort[found] ? sort[found] : ''}`;
	const value = slug?.find(item => item.startsWith('p-'));
	const pageFrom = value ? parseInt(value.split('-')[1], 10) : null;
	const car = slug?.find(segment => segment.startsWith('car-')) || null;

	return (
		<Layout size='lg'>
			<CatalogHeader section={ section } slug={ slug } />
			<div className='lg:py-5 lg:flex'>
				<FilterAlt filterData={ filterData } section={ section } car={ car } slug={ slug } />
				<div className='flex-1 -mt-10 lg:-mt-14'>
					<CatalogToolbar car={ car } section={ section } slug={ slug } />
					<SelectionByCar car={ car } section={ section } />
					<ActiveFilters section={ section } slug={ slug } className='hidden lg:flex' />
					<CatalogProducts searchParams={ searchParams } pageFrom={ pageFrom } section={ section } slug={ slug } locale={ locale } pageItem={ pageItem } />
				</div>
			</div>
			<Support />
		</Layout>
	)
}
