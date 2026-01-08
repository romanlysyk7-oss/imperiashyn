'use client';

import { useTranslations } from 'next-intl';
import type { AliasItem } from '@/entities/alias/model/alias.types';
import type { ConfigSettings } from '@/shared/types/settings';

import { FooterTitle } from './FooterTitle';
import { FooterContacts } from './FooterContacts';
import { FooterCatalog } from './FooterCatalog';
import { FooterInfo } from './FooterInfo';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { LanguageSwitcher } from '@/features/i18n';

interface Props {
	alias: AliasItem[];
	settingsData: ConfigSettings;
	year: number;
}

export function Footer({ alias, settingsData, year }: Props) {
	const t = useTranslations('footer');
	const lang = useLanguage();

	return (
		<footer className="bg-black">
			<div className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<div>
					<p className="text-gray-500 leading-6 text-sm mb-8">
						© {year} {settingsData.locales[lang].owner}
						<br/>
						{ t('all rights reserved') }
					</p>
					<LanguageSwitcher />
				</div>

				<div>
					<FooterTitle title={ t('contacts') }/>
					<FooterContacts settings={ settingsData } />
				</div>

				<div>
					<FooterTitle title="Каталог"/>
					<FooterCatalog/>
				</div>

				<div>
					<FooterTitle title={ t('information') }/>
					<FooterInfo alias={ alias }/>
				</div>
			</div>
		</footer>
	);
}
