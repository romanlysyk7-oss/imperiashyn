import { Review } from '@/entities/review/model/types';
import { ReviewItem } from '@/entities/review/ui/ReviewItem';
import { NoResult } from '@/shared/ui/no-result';
import { CreateReviewForm } from '@/features/review/create-review/ui/CreateReviewForm';

interface Props {
	reviews?: Review[];
	model_id?: number;
	product_id?: number;
	trc_id?: number;
}

export function Reviews({ reviews, ...ids }: Props) {
	return (
		<div className="my-5 md:my-6 max-w-xl w-full">
			{reviews?.length ? (
				reviews.map(review => (
					<ReviewItem key={review.review_id} review={review} />
				))
			) : (
				<NoResult description="no comment" />
			)}

			<CreateReviewForm {...ids} />
		</div>
	);
}
