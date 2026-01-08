import Image from 'next/image';
import { Divider } from '@heroui/react';

import type { ConfigSettings } from '@/shared/types/settings';
import { Button } from '@/shared/ui/button';
import { Link } from '@/shared/i18n/navigation';
import { HtmlContent } from '@/shared/lib/sanitizeHtml';

import { Contacts } from '@/entities/contacts';
import { useInfoBlock } from '../model/useInfoBlock';

const LINKS = [
	{
		href: '/page/garantiya-ta-povernennya',
		icon: '/icons/info-block/guarantee.svg',
		label: 'guarantee',
	},
	{
		href: '/page/payment',
		icon: '/icons/info-block/payment.svg',
		label: 'payment',
	},
	{
		href: '/page/garantiya-ta-povernennya',
		icon: '/icons/info-block/return.svg',
		label: 'refund',
	},
];

interface Props {
	settingsData: ConfigSettings;
}

export function InfoBlock({ settingsData }: Props) {
	const { t, address, openHours } = useInfoBlock(settingsData);

	return (
		<section className="2xl:w-64">
			<div className="grid sm:grid-cols-3 2xl:grid-cols-1 bg-white rounded-sm border border-gray-200 px-5 py-4">
				{ LINKS.map(link => (
					<Button
						key={ link.label }
						as={ Link }
						variant="light"
						size="md"
						color="default"
						href={ link.href }
						className="font-medium hover:text-blue-500 max-w-max px-1"
						startContent={
							<Image src={ link.icon } width={ 24 } height={ 24 } alt=""/>
						}
					>
						<span className="underline">{ t(link.label) }</span>
					</Button>
				)) }

				<Divider className='my-4'/>

				<h5 className="text-lg font-bold">
					{ t('contacts') }
				</h5>

				<div className='text-sm mb-4'>
					<HtmlContent htmlString={ address }/>
				</div>

				<Contacts isInfoBlock settingsData={ settingsData } />

				<div className="flex items-center gap-2">
					<Image
						src="/icons/info-block/calendar.svg"
						width={ 24 }
						height={ 24 }
						alt=""
					/>
					<HtmlContent htmlString={ openHours }/>
				</div>

				<Divider className='my-4'/>

				<h5 className="text-lg font-bold">
					{ t('delivery across ukraine') }
				</h5>

				<div className='text-sm'>
					<p className='mt-3 font-bold'>{ t('period') }</p>
					<p className='mt-3'>{ t('novaposhta') }</p>
					<p>{ t('ukrposhta') }</p>
				</div>
			</div>
		</section>
	);
}
