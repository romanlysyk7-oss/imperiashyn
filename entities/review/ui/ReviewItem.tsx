import { Rating } from '@/entities/rating';
import { Review } from '../model/types';
import { formatReviewDate } from '../lib/formatReviewDate';

interface Props {
	review: Review;
}

export function ReviewItem({ review }: Props) {
	return (
		<div className="bg-white py-4 px-6 shadow-md">
			<div className="flex justify-between">
				<div className="flex items-center gap-4">
					<div className="font-bold text-lg">{ review.name }</div>
					<div className="text-xs">
						{ formatReviewDate(review.created_at) }
					</div>
				</div>
				<Rating commentsAvgRate={ review.score } size="medium"/>
			</div>

			<div className="w-10 h-0.5 bg-black my-2"/>

			<div className="text-sm">{ review.text }</div>
		</div>
	);
}
