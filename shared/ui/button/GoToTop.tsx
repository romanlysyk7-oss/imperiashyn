'use client';

import { useInView } from 'react-intersection-observer';

import { Button } from '@/shared/ui/button/Button';
import * as Icons from '@/shared/ui/icons';

export function GoToTop() {
	const { ref, inView } = useInView({
		threshold: 1,
		rootMargin: '200px',
	});

	const handleScrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div ref={ ref } >
			{ !inView && (
				<Button
					isIconOnly
					color='default'
					onPress={ handleScrollTop }
					className="fixed right-3 bottom-48 z-50 font-bold"
				>
					<Icons.ChevronUpIcon className='fill-gray-800' />
				</Button>
			) }
		</div>
	);
}
