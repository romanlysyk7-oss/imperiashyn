export interface NavigationItem {
	id: string;
	label: string;      // ключ для i18n
	href: string;
	children?: NavigationItem[];
	roles?: string[];   // опційно
}
