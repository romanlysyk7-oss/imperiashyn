export function getStart(page: number, pageSize: number) {
	return (page - 1) * pageSize;
}

export function getTotalPages(total: number, pageSize: number) {
	return Math.ceil(total / pageSize);
}
