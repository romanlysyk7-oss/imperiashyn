export function parseSlug(slug: string[] | undefined, checkboxKey: string) {
	if(!slug) {
		return { filtered: [], defaultValue: '' };
	}

	const decoded = slug.map(decodeURIComponent);
	const keyPattern = new RegExp(`^${checkboxKey}[\\w\u0400-\u04FF.()]+$`);

	const filtered = decoded.filter(item => !keyPattern.test(item));
	const found = decoded.find(item => keyPattern.test(item));
	const defaultValue = found ? found.split('-')[1] : '';

	return { filtered, defaultValue };
}
