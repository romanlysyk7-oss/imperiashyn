'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { RATING_STEPS } from '../model/config';
import type { RatingProps } from '../model/types';

export function Rating({ commentsAvgRate, commentsCount, size = 'small', isCreateComment, setRate }: RatingProps) {
	const [ hoverRate, setHoverRate ] = useState(0);
	const iconSize =
		size === 'medium' ? 'w-5 h-5 px-0.5' : 'w-4 h-4 px-0.5';
	const visibleRate = Math.max(hoverRate, commentsAvgRate);
	const handleClick = (id: number) => {
		setRate?.(id);
	};

	return (
		<div className="flex items-center h-6">
			<div className="flex">
				{ RATING_STEPS.map(item => (
					<svg
						key={ item.id }
						onClick={ () => handleClick(item.id) }
						onMouseEnter={ () => setHoverRate(item.id) }
						onMouseLeave={ () => setHoverRate(0) }
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className={ twMerge(
							iconSize,
							visibleRate < item.rate && 'text-gray-500',
							visibleRate >= item.rate && 'text-amber-400',
							!isCreateComment && 'pointer-events-none'
						) }
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
						/>
					</svg>
				)) }
			</div>

			{ commentsCount && (
				<div className="flex ml-2.5 cursor-pointer">
          <span className="text-sm text-blue-500 font-medium">
            { commentsCount }
          </span>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						className="stroke-blue-500 w-4 h-4 ml-1 mt-0.5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 4H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.188c1 0 1.812.811 1.812 1.812 0 .808.976 1.212 1.547.641l1.867-1.867A2 2 0 0 1 14.828 18H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
						/>
					</svg>
				</div>
			) }
		</div>
	);
}
