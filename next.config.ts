import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
	"./shared/i18n/config/request.ts"
);

const nextConfig: NextConfig = {
	env: {
		NEXT_PUBLIC_API_URL: process.env.SERVER_URL,
		NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
		HOSTNAME: process.env.HOSTNAME,
		HOSTNAME_TYRECLUB: process.env.HOSTNAME,
		ACCESS_ORIGIN: process.env.NEXT_PUBLIC_ACCESS_ORIGIN,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'opt.tyreclub.com.ua',
				pathname: '/api/public/img/user/**',
			},
			{
				protocol: 'https',
				hostname: 'admin.imperiashyn.com.ua',
				pathname: '**',
			},
		],
	},
	experimental: {
		optimizePackageImports: ['@heroui/react'],
	},
};

export default withNextIntl(nextConfig);
