export interface SortOption {
	label: string;
	href: string;
}

export const SORT_OPTIONS: SortOption[] = [
	{
		label: 'cheap at first',
		href: 'order-ch',
	},
	{
		label: 'expensive at first',
		href: 'order-ex',
	},
	{
		label: 'by popularity',
		href: 'order-pop',
	},
	{
		label: 'by number of offers',
		href: 'order-off',
	},
];
