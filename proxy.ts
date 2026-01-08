import createMiddleware from "next-intl/middleware";
import { NextRequest } from 'next/server';
import { routing } from "@/shared/i18n/config/routing";

export default function middleware(request: NextRequest) {
	return createMiddleware({
		locales: routing.locales,
		defaultLocale: routing.defaultLocale,
		localePrefix: 'as-needed',
		localeDetection: routing.localeDetection
	})(request);
}

export const config = {
	matcher: [ '/((?!api|_next|.*\\..*).*)' ]
};
