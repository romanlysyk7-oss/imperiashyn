export function removeSlugValue(
	slug: string[],
	id: string,
	value: string,
): string[] {
	return slug.reduce<string[]>((acc, item) => {
		if(item.startsWith(`${ id }-`)) {
			const values = decodeURIComponent(item)
				.slice(id.length + 1)
				.split(',')
				.filter(v => v !== value);

			if(values.length) {
				acc.push(`${ id }-${ values.join(',') }`);
			}
		} else {
			acc.push(item);
		}
		return acc;
	}, []);
}
