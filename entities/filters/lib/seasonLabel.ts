import { mapSeason } from '@/entities/product/model/mappers';

export function getSeasonLabel(value: string, t: (k: string) => string) {
	const season = mapSeason(value);
	return t(season);
}
