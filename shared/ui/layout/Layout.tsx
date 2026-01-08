import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { ResetProgress } from '@/widgets/progress';
import { GoToTop } from '@/shared/ui/button/GoToTop';

export function Layout({ children, size }: { children: ReactNode, size?: 'sm' | 'md' | 'lg' | 'xl' }) {
	return (
		<div className={ twMerge('container mx-auto px-4 pt-5 pb-12 min-h-[70vh]', size === 'lg' && 'max-w-7xl') }>
			<GoToTop />
			<ResetProgress />
			{ children }
		</div>
	)
}
