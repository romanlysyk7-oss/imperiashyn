import type { SeasonType } from '@/entities/products/model/types';

export function getSeasonIcon(season: 'summer' | 'winter' | 'all season' | SeasonType): string | null {
	switch(season) {
		case '1':
		case 'summer':
			return 'sun';
		case '2':
		case 'winter':
			return 'snow';
		case '3':
		case 'all season':
			return 'all-season';
		default:
			return null;
	}
}
