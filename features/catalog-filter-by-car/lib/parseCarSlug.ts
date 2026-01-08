import { CarFilters } from '../model/types';

export function parseCarSlug(car: string | null): CarFilters {
	if(!car) {
		return { brand: 0, model: 0, year: 0, modification: 0 };
	}

	const numbers = car
		.split('-')
		.filter(part => /^\d+$/.test(part))
		.map(Number);

	if(numbers.length > 2) {
		return {
			year: numbers[0],
			brand: numbers[1],
			model: numbers[2],
			modification: numbers[3] ?? 0,
		};
	}

	return {
		brand: numbers[0] ?? 0,
		model: 0,
		year: 0,
		modification: 0,
	};
}
