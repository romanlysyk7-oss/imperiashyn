'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { getCountryByLocale } from '@/entities/country/model/getCountryByLocale';
import { getCountryCode } from '@/entities/country/lib/getCountryCode';
import { CountryInfoData } from '@/entities/country/model/types';
import { twMerge } from 'tailwind-merge';

interface Props extends CountryInfoData {
	titleClassName?: string;
	classNames?: string;
}

export function CountryInfo({ countryUk, countryRu, year, classNames }: Props) {
	const locale = useLocale();
	const country = getCountryByLocale({ locale, countryUk, countryRu });
	const countryCode = getCountryCode(countryUk);

	return (
		<div className={ twMerge("flex items-center", classNames) }>
			{ countryCode && (
				<div className="group relative">
					<div
						className="absolute bottom-[calc(100%+0.2rem)] left-1/2 hidden -translate-x-1/2 group-hover:block md:group-hover:hidden">
						<div className="rounded bg-black px-4 py-1 text-xs text-white">
							{ country }
							<svg
								className="absolute top-full h-2 w-8 xl:w-full"
								viewBox="0 0 255 255"
								fill="currentColor"
							>
								<polygon points="0,0 127.5,127.5 255,0"/>
							</svg>
						</div>
					</div>
					<Image
						src={ `/images/flags/${ countryCode }.svg` }
						width={ 26 }
						height={ 26 }
						alt=""
						className="h-6 w-6 rounded-full"
					/>
				</div>
			) }
			<p className="ml-2.5 text-sm font-medium">
        <span className="hidden sm:inline">
          { country }
					{ country && year > 0 && ', ' }
        </span>
				{ year > 0 && year }
			</p>
		</div>
	);
}
