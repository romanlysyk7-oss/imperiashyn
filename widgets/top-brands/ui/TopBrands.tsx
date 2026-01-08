'use client';

import Image from 'next/image';

import { Link } from '@/shared/i18n/navigation';
import { ShowAllButton } from '@/shared/ui/button/ShowAllButton';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';

const brands = [ 'b-29', 'b-36', 'b-153', 'b-102', 'b-87', 'b-48', 'b-177', 'b-232' ];

export function TopBrands() {
	const { handleNavigation } = useNavigationProgress();

	return (
		<div className='mt-24'>
			<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 justify-items-center'>
				{ brands.map((item, index) => {
					const href = `/catalog/tires/${ item }`;

					return (
						<Link
							key={ index }
							href={ href }
							onClick={ () => handleNavigation(href) }
						>
							<Image
								width={ 130 }
								height={ 50 }
								src={ `/images/brands/${ item }.webp` }
								alt=''
							/>
						</Link>
					)
				})}
			</div>
			<ShowAllButton />
		</div>
	);
}
