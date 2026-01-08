import Image from 'next/image';
import { Link, usePathname } from '@/shared/i18n/navigation';
import { useAppDispatch } from '@/shared/hooks/redux';
import { showProgress } from '@/features/progress/model/progress.slice';

const width = 185;
const height = 60;

const HeaderLogo = () => {
	const pathname = usePathname();
	const dispatch = useAppDispatch();

	const handleClick = () => {
		if(pathname !== '/') {
			dispatch(showProgress());
		}
	};

	const commonProps = {
		href: '/',
		onClick: handleClick,
		className: 'logo',
	};

	return (
		<Link { ...commonProps } className='logo max-w-40 md:max-w-48 lg:w-auto'>
			<Image
				src='/logo.svg'
				alt='logo'
				width={ width }
				height={ height }
				loading='eager'
			/>
		</Link>
	)
};

export default HeaderLogo;
