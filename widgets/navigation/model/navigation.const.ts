import { Section } from '@/shared/types/section';
import { SectionMenuItem } from './types';

export const SECTION_MENU: SectionMenuItem[] = [
	{ section: Section.Tires, labelKey: 'cartires' },
	{ section: Section.Disks, labelKey: 'cardiscs' },
];

export const TYPE_CAR = [
	{
		label: 'light',
		href: '/catalog/tires/vt-1', // 'vehicle_type=1,2
		icon: '1' as const,
		vehicleType: ['1'],
	},
	{
		label: 'suvs',
		href: '/catalog/tires/vt-2',
		icon: '2' as const,
		vehicleType: ['2'],
	},
	{
		label: 'buses',
		href: '/catalog/tires/vt-8',
		icon: '8' as const,
		vehicleType: ['8'],
	},
	{
		label: 'cargo',
		href: '/catalog/cargo', // vehicle_type=3,4,5,6
		icon: '3' as const,
		vehicleType: ['3','4','5','6'],
	},
	{
		label: 'special equipment',
		href: '/catalog/special', //vehicle_type=9,10,11
		icon: '9' as const,
		vehicleType: ['9','10','11'],
	},
	{
		label: 'motorcycles',
		href: '/catalog/moto',
		icon: '7' as const,
		vehicleType: ['7'],
	},
];

