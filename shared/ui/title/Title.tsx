import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

interface Props {
	title: string
	isMain?: boolean
	className?: string
	translations?: boolean
}

export function Title({ title, isMain, className, translations }: Props) {
	const t = useTranslations('common');
	const text = translations ? t(title) : title;

	if(isMain) return <h1 className={ twMerge('my-5 text-3xl md:text-4xl font-bold px-3 md:px-0', className) }>
		{ text }
	</h1>

	return <h2 className={ twMerge('my-5 text-3xl md:text-4xl font-bold px-3 md:px-0', className) }>
		{ text }
	</h2>
}
