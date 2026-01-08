import { useTranslations } from 'next-intl';

import { Title } from './Title';
import { Link } from './Link';
import * as LINKS from '../model/constants';
import { TypeCarFilter } from '@/widgets/navigation';

interface Props {
	onClose: (href: string) => void;
}

export function TireFilter({ onClose }: Props) {
	const t = useTranslations('headerMenuFilter');

	return (
		<>
			<div>
				<Title title={ t('by season') } />
				<div className='mb-6 grid grid-cols-1 justify-items-start'>
					{ LINKS.SEASON.map((item, index) => {
						return <Link
							key={ index }
							href={ item.href }
							onClose={ onClose }
							img={ item.img }
							className={ item.className }
						>
							{ t(item.label) }
						</Link>
					}) }
				</div>
			</div>
			<div>
				<Title title={ t('by car type') } />
				<TypeCarFilter onClose={ onClose } />
			</div>
			<div>
				<Title title={ t('by brands') } />
				<div className='mb-6 grid grid-cols-2 gap-x-1 md:gap-x-2 justify-items-start'>
					{ LINKS.BRANDS.map((item, index) => {
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
						href='/catalog/tires'
						className='text-primary font-bold hover:underline uppercase mt-2'
					>
						{ t('all brands') }
					</Link>
				</div>
			</div>
			<div>
				<Title title={ t('by diameter') } />
				<div className='mb-6 grid grid-cols-4 gap-1 md:gap-2 justify-items-start'>
					{ LINKS.DIAMETER.map((item, index) => {
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
