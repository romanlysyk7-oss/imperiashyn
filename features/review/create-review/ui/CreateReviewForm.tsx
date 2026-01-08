'use client';

import { FormEvent, useState } from 'react';
import { Form } from '@heroui/form';
import { Textarea } from '@heroui/input';
import { useTranslations } from 'next-intl';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { Rating } from '@/entities/rating';

import { useCreateReview } from '../model/useCreateReview';

interface Props {
	model_id?: number;
	product_id?: number;
	trc_id?: number;
}

export function CreateReviewForm(props: Props) {
	const t = useTranslations('review');
	const [ rate, setRate ] = useState(0);
	const { submit, isLoading } = useCreateReview(props);

	const onSubmit = async(event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);

		await submit({
			name: String(data.get('name')),
			text: String(data.get('text')),
			score: rate,
		});

		form.reset();
		setRate(0);
	};

	return (
		<Form onSubmit={ onSubmit }>
			<div className="bg-white shadow-md mt-6 w-full">
				<h6 className="font-bold text-lg py-4 px-6 bg-blue-100">
					{ t('leave review') }
				</h6>

				<div className="pt-4 px-6 pb-6 flex flex-col gap-4">
					<Input
						isRequired
						label={ t('name') }
						name="name"
						errorMessage={ t('enter your name') }
					/>

					<Textarea
						isRequired
						name="text"
						variant='bordered'
						radius="sm"
						label={ t('comment') }
						errorMessage={ t('enter your comment') }
					/>

					<div className="flex items-center gap-2">
						<span className="text-sm font-semibold">
							{ t('rating') }
						</span>
						<Rating
							commentsAvgRate={ rate }
							isCreateComment
							setRate={ setRate }
						/>
					</div>

					<Button
						type="submit"
						isLoading={ isLoading }
					>
						{ t('add comment') }
					</Button>
				</div>
			</div>
		</Form>
	);
}
