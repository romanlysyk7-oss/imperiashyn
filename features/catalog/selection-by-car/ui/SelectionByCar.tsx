'use client';

import { usePathname } from '@/shared/i18n/navigation';
import { Section } from '@/shared/types/section';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';

import { parseCar } from '../model/utils';
import { cleanPathnameFromCar } from '../model/selectors';
import { SelectionByCarProps } from '../model/types';

import { Tires } from './Tires';
import { Disks } from './Disks';

export function SelectionByCar({ car, section }: SelectionByCarProps) {
	const pathname = usePathname();
	const parsed = parseCar(car);
	const { handleNavigation } = useNavigationProgress();

	if(!parsed) return null;

	const cleanedPath = cleanPathnameFromCar(pathname);

	const commonProps = {
		car: car!,
		modification: parsed.modification,
		cleaned: cleanedPath,
		handleClick: handleNavigation,
	};

	return (
		<div className="mb-5 border-y py-4 border-gray-300">
			{ section === Section.Tires
				? <Tires { ...commonProps } />
				: <Disks { ...commonProps } /> }
		</div>
	);
}
