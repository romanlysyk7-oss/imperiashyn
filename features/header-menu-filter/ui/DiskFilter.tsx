import { useTranslations } from 'next-intl';

import { Title } from './Title';
import { Link } from './Link';
import * as LINKS from '../model/constants';

interface Props {
	onClose: (href: string) => void;
}

export function DiskFilter({ onClose }: Props) {
	const t = useTranslations('headerMenuFilter');

	return (
		<>
			<div>
				<Title title={ t('by disk type') } />
				<div className='mb-6 grid grid-cols-1 justify-items-start'>
					{ LINKS.TYPE_DISK.map((item, index) => {
						return <Link
							key={ index }
							href={ item.href }
							onClose={ onClose }
						>
							{ t(item.label) }
						</Link>
					}) }
				</div>
			</div>
			<div>
				<Title title={ t('by brands') } />
				<div className='mb-6 grid grid-cols-2 gap-x-2 justify-items-start'>
					{ LINKS.DISKS_BRAND.map((item, index) => {
						return <Link
							key={ index }
							href={ item.href }
							onClose={ onClose }
						>
							{ item.label }
						</Link>
					}) }
					<Link
						onClose={ onClose }
						href='/catalog/disks'
						className='text-primary font-bold hover:underline uppercase mt-2'
					>
						{ t('all brands') }
					</Link>
				</div>
			</div>
			<div>
				<Title title={ t('by car brands') } />
				<div className='mb-6 grid grid-cols-2 gap-x-2 justify-items-start'>
					{ LINKS.CAR_BRANDS.map((item, index) => {
						return <Link
							key={ index }
							href={ item.href }
							onClose={ onClose }
						>
							{ item.label }
						</Link>
					}) }
					<Link
						onClose={ onClose }
						href='/catalog/disks/car-'
						className='text-primary font-bold hover:underline uppercase mt-2'
					>
						{ t('all car brands') }
					</Link>
				</div>
			</div>
			<div>
				<Title title={ t('by diameter') } />
				<div className='mb-6 grid grid-cols-4 gap-2 justify-items-start'>
					{ LINKS.DISK_DIAMETERS.map((item, index) => {
						return <Link
							key={ index }
							href={ item.href }
							onClose={ onClose }
							variant='bordered'
						>
							{ item.label }
						</Link>
					}) }
				</div>
			</div>
		</>
	)
}