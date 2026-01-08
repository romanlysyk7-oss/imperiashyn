import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { Locale } from "@/shared/types/locale";

export default getRequestConfig(async({ requestLocale }) => {
	let locale = await requestLocale;

	if(!locale || !routing.locales.includes(locale as Locale)) {
		locale = routing.defaultLocale;
	}

	const messages = {
		common: locale === Locale.UK ? (await import("../locales/uk/common.json")).default : (await import(`../locales/${ locale }/common.json`)).default,
		phoneMask: locale === Locale.UK ? (await import("../locales/uk/phone-mask.json")).default : (await import(`../locales/${ locale }/phone-mask.json`)).default,
		select: locale === Locale.UK ? (await import("../locales/uk/select.json")).default : (await import(`../locales/${ locale }/select.json`)).default,
		filters: locale === Locale.UK ? (await import("@/entities/filters/locales/uk/filters.json")).default : (await import(`@/entities/filters/locales/${ locale }/filters.json`)).default,
		footer: locale === Locale.UK ? (await import("@/widgets/footer/locales/uk/footer.json")).default : (await import(`@/widgets/footer/locales/${ locale }/footer.json`)).default,
		bookmarks: locale === Locale.UK ? (await import("@/features/bookmarks/locales/uk/bookmarks.json")).default : (await import(`@/features/bookmarks/locales/${ locale }/bookmarks.json`)).default,
		comparison: locale === Locale.UK ? (await import("@/features/comparison/locales/uk/comparison.json")).default : (await import(`@/features/comparison/locales/${ locale }/comparison.json`)).default,
		cart: locale === Locale.UK ? (await import("@/entities/cart/locales/uk/cart.json")).default : (await import(`@/entities/cart/locales/${ locale }/cart.json`)).default,
		catalog: locale === Locale.UK ? (await import("@/entities/catalog/locales/uk/catalog.json")).default : (await import(`@/entities/catalog/locales/${ locale }/catalog.json`)).default,
		languageSwitcher: locale === Locale.UK ? (await import("@/features/i18n/locales/uk/language-switcher.json")).default : (await import(`@/features/i18n/locales/${ locale }/language-switcher.json`)).default,
		navigation: locale === Locale.UK ? (await import("@/features/navigation/locales/uk/navigation.json")).default : (await import(`@/features/navigation/locales/${ locale }/navigation.json`)).default,
		headerMenuFilter: locale === Locale.UK ? (await import("@/features/header-menu-filter/locales/uk/header-menu-filter.json")).default : (await import(`@/features/header-menu-filter/locales/${ locale }/header-menu-filter.json`)).default,
		carType: locale === Locale.UK ? (await import("@/widgets/navigation/locales/uk/car-type.json")).default : (await import(`@/widgets/navigation/locales/${ locale }/car-type.json`)).default,
		callbackModal: locale === Locale.UK ? (await import("@/entities/callback/locales/uk/callback.json")).default : (await import(`@/entities/callback/locales/${ locale }/callback.json`)).default,
		banner: locale === Locale.UK ? (await import("@/entities/banner/locales/uk/banner.json")).default : (await import(`@/entities/banner/locales/${ locale }/banner.json`)).default,
		support: locale === Locale.UK ? (await import("@/widgets/support/locales/uk/support.json")).default : (await import(`@/widgets/support/locales/${ locale }/support.json`)).default,
		infoBlock: locale === Locale.UK ? (await import("@/widgets/info-block/locales/uk/info-block.json")).default : (await import(`@/widgets/info-block/locales/${ locale }/info-block.json`)).default,
		product: locale === Locale.UK ? (await import("@/entities/product/locales/uk/product.json")).default : (await import(`@/entities/product/locales/${ locale }/product.json`)).default,
		delivery: locale === Locale.UK ? (await import("@/entities/delivery/locales/uk/delivery.json")).default : (await import(`@/entities/delivery/locales/${ locale }/delivery.json`)).default,
		order: locale === Locale.UK ? (await import("@/entities/order/locales/uk/order.json")).default : (await import(`@/entities/order/locales/${ locale }/order.json`)).default,
		review: locale === Locale.UK ? (await import("@/entities/review/locals/uk/review.json")).default : (await import(`@/entities/review/locals/${ locale }/review.json`)).default,
	};

	return { locale, messages };
});
