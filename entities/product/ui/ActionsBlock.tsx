import { Section } from '@/shared/types/section';
import { AddToBookmarksButton } from '@/features/bookmarks/toggle';
import { AddToComparisonButton } from '@/features/comparison/toggle/ui/AddToComparsionButton';

interface Props {
	group: number
	sectionNew: Section
}

export function ActionsBlock({ group, sectionNew }: Props) {
	return (
		<div className='absolute top-2 right-2 flex flex-col z-10'>
			<AddToBookmarksButton
				id={ group }
				section={ sectionNew }
				isProduct
			/>
			<AddToComparisonButton
				id={ group }
				section={ sectionNew }
				isProduct
			/>
		</div>
	)
}
