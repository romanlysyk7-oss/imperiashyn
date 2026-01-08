import { ImageResponse } from 'next/og';

import { getHomeSeo } from '@/entities/home/model/seo';
import { Locale } from '@/shared/types/locale';

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

export default async function OpenGraphImage({ params }: { params: { locale: Locale } }) {
	const seo = await getHomeSeo(params.locale);

	return new ImageResponse(
		(
			<div
				style={ {
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					padding: 60,
					background: 'linear-gradient(135deg, #0ea5e9, #1e3a8a)',
					color: 'white',
					fontFamily: 'Inter',
				} }
			>
				<img
					src={ `${ process.env.NEXT_PUBLIC_ACCESS_ORIGIN }/logo.svg` }
					width={ 180 }
					height={ 60 }
					style={ { marginBottom: 40 } }
					alt=""
				/>

				<h1 style={ { fontSize: 64, fontWeight: 800, lineHeight: 1.1 } }>
					{ seo.title }
				</h1>

				<p style={ { fontSize: 28, marginTop: 24, opacity: 0.9 } }>
					{ seo.description }
				</p>
			</div>
		),
		size
	);
}
