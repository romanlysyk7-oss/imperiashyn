export function cleanPathnameFromCar(pathname: string): string {
	return pathname.replace(/^.*?\/car[^\/]*/, '');
}
