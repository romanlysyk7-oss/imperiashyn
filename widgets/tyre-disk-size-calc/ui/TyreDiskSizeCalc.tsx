'use client';

import Iframe from 'react-iframe';
import { useLocale } from 'next-intl';

import { Locale } from '@/shared/types/locale';
import { useIframeAutoHeight } from '../model/useIframeAutoHeight';

const IFRAME_ID = 'tireCalculator';

export function TyreDiskSizeCalc() {
	const locale = useLocale();
	const height = useIframeAutoHeight(IFRAME_ID);

	const url = `/calc/kalkulator${ locale === Locale.UK ? '_ua' : '' }.htm?background=2772E2`;

	return (
		<Iframe
			id={ IFRAME_ID }
			url={ url }
			width="100%"
			height={ height }
			display="block"
			position="relative"
			loading="lazy"
		/>
	);
}
