'use client';

import { useMemo, useState } from 'react';
import { parseSlug } from '../lib/parseSlug';
import { POPULAR_SIZE } from '@/widgets/home-filters/model/const';
import { Section } from '@/shared/types/section';

interface Props {
	slug?: string[];
	checkboxKey: string;
	name: string;
	section: Section;
}

export function useAutocomplete({ slug, checkboxKey, name, section }: Props) {
	const [ loading, setLoading ] = useState(false);

	const { filtered, defaultValue } = useMemo(
		() => parseSlug(slug, checkboxKey),
		[ slug, checkboxKey ],
	);

	const popularOptions =
		section === Section.Tires
			? POPULAR_SIZE[name]
			: section === Section.Battery && name === 'jemnist'
				? POPULAR_SIZE[name]
				: null;

	return {
		loading,
		setLoading,
		filteredSlug: filtered,
		defaultValue,
		popularOptions,
	};
}
