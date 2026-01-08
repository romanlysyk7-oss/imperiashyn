import { Section } from '@/shared/types/section';

interface Props {
	section: Section;
	checkboxKey: string;
	value: string;
	filteredSlug: string[];
	clear?: boolean;
}

export function createHref({ section, checkboxKey, value, filteredSlug, clear }: Props) {
	const base = `/catalog/${ section }/`;
	const keyFull = `${ checkboxKey }${ value }`;

	if(clear) return `${ base }${ filteredSlug.join('/') }`;

	if(filteredSlug.includes(keyFull)) {
		return `${ base }${ filteredSlug.join('/') }`;
	}

	return `${ base }${ keyFull }/${ checkboxKey === 's-' ? filteredSlug.filter(item => !/^stud-\d+$/.test(item)).join('/') : filteredSlug.join('/') }`;
}
