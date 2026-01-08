'use client';

import { Link } from '@/shared/i18n/navigation';
import { Logo } from '@/shared/ui/logo/Logo';
import { usePathname } from '@/shared/i18n/navigation';
import { useNavigationProgress } from '@/shared/hooks/useNavigationProgress';

export function LogoLink() {
	const pathname = usePathname();
	const { handleNavigation } = useNavigationProgress();

	if(pathname === '/') return <Logo/>;

	return (
		<Link
			href="/" onClick={ () => handleNavigation(`/`) }
			className="logo"
		>
			<Logo/>
		</Link>
	);
}
