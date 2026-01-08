export function parseProductId(slug: string): string {
	const match = slug.match(/(\d+)$/);
	return match ? match[1] : '';
}
