import { twMerge } from 'tailwind-merge';
import { NavbarBrand } from '@heroui/react';

import { LogoLink } from '@/features/navigation/ui/LogoLink';

import { HeaderActions } from './HeaderActions';
import { HeaderSearch } from './HeaderSearch';
import styles from './index.module.scss';

export function MainBarLayout() {
	return (
		<div className={
			twMerge(
				'container grid items-center justify-normal py-3 px-4 grid-cols-2 lg:grid-cols-[220px_auto_150px]',
				styles['container']
			)
		}>
			<NavbarBrand className={ styles.logo }>
				<LogoLink/>
			</NavbarBrand>
			<HeaderSearch className={ styles.search }/>
			<HeaderActions/>
		</div>
	)
}
