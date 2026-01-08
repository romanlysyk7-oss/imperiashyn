'use client';

import { useEffect } from 'react';
import { Link } from '@/shared/i18n/navigation';
import { Badge, NavbarMenuToggle } from '@heroui/react';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { showProgress } from '@/features/progress/model/progress.slice';

import { initBookmarks } from '@/features/bookmarks/model/initFromStorage';
import { initComparison } from '@/features/comparison/model/initFromStorage';
import { initCart } from '@/features/cart/model/initFromStorage';
import { useHeaderMenu } from '@/widgets/header/model/useHeaderMenu';

import * as Icons from '@/shared/ui/icons';
import { Button } from '@/shared/ui/button';

export function HeaderActions() {
	const menu = useHeaderMenu();
	const dispatch = useAppDispatch();
	const bookmarksCount = useAppSelector(state => state.bookmarksReducer.bookmarksItems);
	const comparisonCount = useAppSelector(state => state.comparisonReducer.comparisonItems);
	const cartCount = useAppSelector(state => state.cartReducer.cartItems);

	useEffect(() => {
		initBookmarks(dispatch);
		initComparison(dispatch);
		initCart(dispatch);
	}, [ dispatch ]);

	return (
		<div className="flex gap-1 items-center">
			<Button
				as={ Link }
				variant='light'
				isIconOnly
				radius='sm'
				href="/comparison"
				className='text-black'
				onPress={ () => dispatch(showProgress()) }
			>
				<Badge
					color={ comparisonCount.length ? 'primary' : 'default' }
					className='border-white'
					content={ comparisonCount.length }
					isInvisible={ !comparisonCount }
					classNames={ { badge: comparisonCount.length ? '' : 'text-white bg-natural-400' } }
				>
					<Icons.LibraIcon/>
				</Badge>
			</Button>

			<Button
				as={ Link }
				variant='light'
				isIconOnly
				radius='sm'
				href="/bookmarks"
				className='text-black'
				onPress={ () => dispatch(showProgress()) }
			>
				<Badge
					color={ bookmarksCount.length ? 'primary' : 'default' }
					className='border-white'
					content={ bookmarksCount.length }
					isInvisible={ !bookmarksCount }
					classNames={ { badge: bookmarksCount.length ? '' : 'text-white bg-natural-400' } }
				>
					<Icons.HeartIcon/>
				</Badge>
			</Button>

			<Button
				as={ Link }
				variant='light'
				isIconOnly
				radius='sm'
				href="/order"
				className='text-black'
				onPress={ () => dispatch(showProgress()) }
			>
				<Badge
					color={ cartCount.length ? 'primary' : 'default' }
					className='border-white'
					content={ cartCount.length }
					isInvisible={ !cartCount }
					classNames={ { badge: cartCount.length ? '' : 'text-white bg-natural-400' } }
				>
					<Icons.CartIcon/>
				</Badge>
			</Button>
			<NavbarMenuToggle icon={ (isOpen) => isOpen ?
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
					<path
						d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
						fill="currentColor"/>
				</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" viewBox="0 0 30 18" fill="none">
					<rect width="30" height="3" fill="currentColor"/>
					<rect y="10" width="30" height="3" fill="currentColor"/>
					<rect y="20" width="30" height="3" fill="currentColor"/>
				</svg> } className="sm:hidden" aria-label={ menu.isMenuOpen ? "Close menu" : "Open menu" }/>
		</div>
	);
}
