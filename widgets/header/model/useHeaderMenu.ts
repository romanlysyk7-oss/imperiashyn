import { useState } from 'react';

export type HeaderFilter = false | 'tires' | 'disks';

export function useHeaderMenu() {
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);
	const [ activeFilter, setActiveFilter ] = useState<HeaderFilter>(false);

	const toggleFilter = (value: HeaderFilter) => {
		setActiveFilter(prev => (prev === value ? false : value));
	};

	const closeAll = () => {
		setIsMenuOpen(false);
		setActiveFilter(false);
	};

	return {
		isMenuOpen,
		setIsMenuOpen,
		activeFilter,
		toggleFilter,
		closeAll,
	};
};
