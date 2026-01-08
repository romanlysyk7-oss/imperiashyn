import { ParsedCarData } from './types';

export function parseCar(car: string | null): ParsedCarData | null {
	if(!car) return null;

	const numbers = car
		.split('-')
		.filter(part => /^\d+$/.test(part))
		.map(Number);

	if(numbers.length < 3) return null;

	return {
		numbers,
		modification: numbers[3] ?? 0,
		isValid: true,
	};
}
