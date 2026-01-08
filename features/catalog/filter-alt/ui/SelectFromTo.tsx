'use client';

import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Link, usePathname } from '@/shared/i18n/navigation';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input/Input';

interface SelectFromTo {
	name: string;
	idMin: string;
	idMax: string;
	from: number;
	to: number;
	title: string;
	btnTitle: string;
	minus?: boolean;
}

export const SelectFromTo: FC<SelectFromTo> = (
	{
		idMin,
		idMax,
		from,
		to,
		title,
		btnTitle,
		minus,
	}
) => {
	const path = usePathname();
	const t = useTranslations('filters');
	const [ minMax, setMinMax ] = useState({ min: '', max: '' });
	const cleanUrl = useMemo(() => {
		return (url: string): string =>
			url
				.replace(new RegExp(`/${idMin}-\\d+`), '')
				.replace(new RegExp(`/${idMax}-\\d+`), '');
	}, [ idMin, idMax ]);

	useEffect(() => {
		const matchMin = path.match(new RegExp(`${idMin}-(\\d+(,\\d+)*)`));
		const matchMax = path.match(new RegExp(`${idMax}-(\\d+(,\\d+)*)`));

		setMinMax({
			min: matchMin?.[0]?.replace(`${ idMin }-`, '') || '',
			max: matchMax?.[0]?.replace(`${ idMax }-`, '') || '',
		});
	}, [ path, idMin, idMax ]);

	const onChange = useCallback(
		(param: 'min' | 'max', value: string) => {
			const onlyNumbers = value.replace(minus ? /[^\d-]/g : /\D/g, '');
			setMinMax(prev => ({ ...prev, [param]: onlyNumbers }));
		},
		[ minus ]
	);

	const href = useMemo(() => {
		const parts = [
			minMax.min && `/${ idMin }-${ minMax.min }`,
			minMax.max && `/${ idMax }-${ minMax.max }`,
		]
			.filter(Boolean)
			.join('');
		return `${ cleanUrl(path) }${ parts }`;
	}, [ minMax, path, idMin, idMax, cleanUrl ]);

	return (
		<div className='mt-2'>
			<div className='text-sm font-bold text-gray-500 uppercase'>
				{ title }
			</div>
			<div className="flex gap-2 mt-3 justify-between">
				<Input
					className="lg:max-w-[140]"
					placeholder={ `${ t('from') } ${ from }` }
					maxLength={ 6 }
					value={ minMax.min }
					onChange={ e => onChange('min', e.target.value) }
				/>
				<Input
					className="lg:max-w-[140]"
					placeholder={ `${ t('to') } ${ to }` }
					maxLength={ 6 }
					value={ minMax.max }
					onChange={ e => onChange('max', e.target.value) }
				/>
			</div>
			<Button
				as={ Link }
				href={ href }
				color='default'
				className="max-w-full w-full mt-4 bg-black text-white"
			>
				{ btnTitle }
			</Button>
		</div>
	);
}
