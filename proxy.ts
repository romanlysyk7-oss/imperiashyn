import { NextRequest, NextResponse } from 'next/server';

const MAINTENANCE = process.env.NEXT_PUBLIC_MAINTENANCE === 'true';

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if (MAINTENANCE && !pathname.startsWith('/maintenance')) {
		return NextResponse.redirect(
			new URL('/maintenance', request.url)
		);
	}

	return NextResponse.next();
}

export const config = {
	matcher: '/((?!_next|favicon.ico).*)',
};

// import createMiddleware from "next-intl/middleware";
// import { NextRequest } from 'next/server';
// import { routing } from "@/shared/i18n/config/routing";
//
// export default function middleware(request: NextRequest) {
// 	return createMiddleware({
// 		locales: routing.locales,
// 		defaultLocale: routing.defaultLocale,
// 		localePrefix: 'as-needed',
// 		localeDetection: routing.localeDetection
// 	})(request);
// }
//
// export const config = {
// 	matcher: [ '/((?!api|_next|.*\\..*).*)' ]
// };
