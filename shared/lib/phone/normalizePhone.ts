const CODES = [
	'50', '63', '66', '67', '68',
	'73', '77', '89',
	'91', '92', '93', '94',
	'95', '96', '97', '98', '99'
];

export function normalizePhone(value: string): string {
	if(value.length < 2) return value;

	const code = value.slice(0, 2);
	return CODES.includes(code) ? value : value.slice(2);
}
