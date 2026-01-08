import { JSX } from 'react';
import { useTranslations } from 'next-intl';

interface Props {
	description: string
}

export function NoResult({ description }: Props): JSX.Element {
	const t = useTranslations('common');

	return (
		<div className="py-5 px-5 text-center bg-blue-100 w-full mt-4 text-lg font-medium">
			{ t(description) }
		</div>
	)
}
