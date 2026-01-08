import { Dispatch, SetStateAction } from 'react';

export interface RatingProps {
	commentsAvgRate: number;
	commentsCount?: number;
	size?: 'small' | 'medium';
	isCreateComment?: boolean;
	setRate?: Dispatch<SetStateAction<number>>;
}
