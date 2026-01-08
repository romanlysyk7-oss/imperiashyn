import { Metadata } from 'next';

interface BuildMetadataParams {
	title: string;
	description: string;
	canonical?: string;
	ogImagePath?: string;
}

export function buildMetadata({ title, description, canonical = '/', ogImagePath = '/opengraph-image' }: BuildMetadataParams): Metadata {
	const baseUrl = process.env.NEXT_PUBLIC_ACCESS_ORIGIN ?? '';

	return {
		metadataBase: new URL(baseUrl),
		title,
		description,
		alternates: {
			canonical,
		},
		openGraph: {
			type: 'website',
			title,
			description,
			url: baseUrl + canonical,
			images: [
				{
					url: baseUrl + ogImagePath,
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [baseUrl + ogImagePath],
		},
	};
}
