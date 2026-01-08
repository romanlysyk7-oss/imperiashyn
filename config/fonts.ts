import { Montserrat as FontMontserrat } from 'next/font/google';

export const fontMontserrat = FontMontserrat({
	subsets: ['cyrillic', 'latin'],
	variable: '--font-montserrat',
});
