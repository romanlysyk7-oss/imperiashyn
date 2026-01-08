import { Link } from '@/shared/i18n/navigation';
import { useAppDispatch } from '@/shared/hooks/redux';
import { setProgress } from '@/widgets/header/store/progressSlice';

interface Props {
	full_name: string;
	page_url: string;
}

export function ProductName({ full_name, page_url }: Props) {
	const dispatch = useAppDispatch();

	return (
		<Link
			href={ `/${ page_url }` }
			onClick={ () => {
				dispatch(setProgress(true))
			} }
			className='font-bold after:absolute after:inset-0 whitespace-normal'
		>
			{ full_name }
		</Link>
	);
}
