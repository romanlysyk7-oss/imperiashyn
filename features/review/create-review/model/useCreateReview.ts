import { productApi } from '@/entities/products/api/product.api';
import { addToast } from '@heroui/toast';
import { useTranslations } from 'next-intl';

interface Params {
	model_id?: number;
	product_id?: number;
	trc_id?: number;
}

export function useCreateReview(params: Params) {
	const t = useTranslations('common');
	const [ createComment, state ] = productApi.useCreateCommentMutation();

	const submit = async(data: {
		name: string;
		text: string;
		score: number;
	}) => {
		await createComment({ ...data, ...params }).unwrap();

		addToast({
			title: t('sent comment'),
			description: t('your comment sent'),
			classNames: {
				base: 'text-black dark:text-gray-50',
				title: 'text-black dark:text-gray-50',
			},
		});
	};

	return { submit, ...state };
}
