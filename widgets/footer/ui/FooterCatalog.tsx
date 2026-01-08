import { Link as LinkI18n } from '@/shared/i18n/navigation';
import { Link } from '@/shared/ui/link';
import { linksCatalog } from '../model/linksCatalog';
import { useTranslations } from 'next-intl';

export function FooterCatalog() {
	const t = useTranslations('footer');

	return (
		<div className="flex flex-col gap-5 mt-4">
			{ linksCatalog.map((item) => (
				<Link
					key={ item.href }
					as={ LinkI18n }
					href={ item.href }
					className="text-white hover:text-primary"
				>
					{ t(item.title) }
				</Link>
			)) }
		</div>
	);
}
