export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'Next.js + HeroUI',
	description: 'Make beautiful websites regardless of your design experience.',
	navItems: {
		buttons: [
			{ section: 'tires', label: 'cartires' },
			{ section: 'disks', label: 'cardiscs' }
		],
		links: [
			{
				label: 'accumulators',
				href: '/catalog/battery',
			},
			{
				label: 'tire calculator',
				href: '/tyre-disk-size-calc',
			},
			{
				label: 'about us',
				href: '/about-us',
			},
			{
				label: 'contacts',
				href: '/contacts',
			},
		],
	},
	navMenuItems: [
		{
			label: 'Profile',
			href: '/profile',
		},
		{
			label: 'Dashboard',
			href: '/dashboard',
		},
		{
			label: 'Projects',
			href: '/projects',
		},
		{
			label: 'Team',
			href: '/team',
		},
		{
			label: 'Calendar',
			href: '/calendar',
		},
		{
			label: 'Settings',
			href: '/settings',
		},
		{
			label: 'Help & Feedback',
			href: '/help-feedback',
		},
		{
			label: 'Logout',
			href: '/logout',
		},
	],
	links: {
		github: 'https://github.com/heroui-inc/heroui',
		twitter: 'https://twitter.com/hero_ui',
		docs: 'https://heroui.com',
		discord: 'https://discord.gg/9b6yyZKmH4',
		sponsor: 'https://patreon.com/jrgarciadev',
	},
};
