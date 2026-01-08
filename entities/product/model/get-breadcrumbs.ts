import { Section } from '@/shared/types/section';

interface Breadcrumb {
	title: string;
	translations: boolean;
	href: string;
}

export function getProductBreadcrumbs(
	section: Section,
	productName: string
): Breadcrumb[] {
	return [
		{
			title: section,
			translations: true,
			href: `/catalog/${ section }`,
		},
		{
			title: productName,
			translations: false,
			href: `/${ section }`,
		},
	];
}
