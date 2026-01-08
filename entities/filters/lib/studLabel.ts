type StudType = {
	name: string;
};

export const StudTransform = (type: string): StudType => {
	const studMap: { [key: string]: StudType } = {
		'0': { name: 'no stud' },
		'1': { name: 'stud' },
	};

	return studMap[type];
};

export function getStudLabel(value: string, t: (k: string) => string) {
	const stud = StudTransform(value);
	return t(stud?.name || '1');
}